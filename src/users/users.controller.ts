import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup') /* This decorator will allow only HTTP Post requests to this handler. */
    createUser(@Body() body: CreateUserDto) { /** As you can see here we are expecting body as CreateUserDto that means body should have email and password fields. */
        this.usersService.create(body.email, body.password);
    }

    @Get('/:id') /* This decorator will allow only HTTP GET requests with id parameter in url to this handler. */
    getUser(@Param('id') id: string) {
        console.log(id);
    }
}
