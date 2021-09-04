import { Controller, Post, Get, Body, Param, Query, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup') /* This decorator will allow only HTTP Post requests to this handler. */
    createUser(@Body() body: CreateUserDto) { /** As you can see here we are expecting body as CreateUserDto that means body should have email and password fields. */
        this.usersService.create(body.email, body.password);
    }

    @Get('/:id') /* This decorator will allow only HTTP GET requests with id parameter in url to this handler. */
    findUser(@Param('id') id: string) {
        return this.usersService.findOne(parseInt(id));
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body);
    }
}
