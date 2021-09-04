import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    /** InjectRepository(User) line is a helper line for Dependency Injection system.
     * Generic type which is Repository<User> is not play well with Dependency Injection system,
     * that's why InjectRepository is required.
     */
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    create(email: string, password: string) {
        const user = this.userRepo.create({ email, password }); /** This line will create instance. */

        return this.userRepo.save(user); /** This line will persist data in the database. */
    }

    async findOne(id: number) {
        return this.userRepo.findOne(id);
    }

    async find(email: string) {
        return this.userRepo.findOne({ email });
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }

        Object.assign(user, attrs); // Get all the properties from attrs and write on user if some of them exist, it will overwrite them.

        return this.userRepo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }

        return this.userRepo.remove(user); // We used remove to be able to execute TypeORM hooks. We could directly use delete method, but hooks weren't executed with delete.
    }
}
