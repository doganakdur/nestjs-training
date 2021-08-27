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
}
