import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post() /* This decorator will allow only HTTP Post requests to this handler. */
    createUser(@Body() body: any) {
        console.log(body);
    }

    @Get('/:id') /* This decorator will allow only HTTP GET requests with id parameter in url to this handler. */
    getUser(@Param('id') id: string) {
        console.log(id);
    }
}
