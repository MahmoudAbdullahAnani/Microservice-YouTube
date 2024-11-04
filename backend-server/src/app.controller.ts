import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getAllUsers() {
    return this.appService.getAllUsers();
  }


  @Post('users')
  createUsers(@Body() user: { name: string; email: string }) {
    return this.appService.createUser(user);
  }
}
