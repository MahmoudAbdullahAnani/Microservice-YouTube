import {  Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // لود وخلاص
  // Test EndPoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET Users => Message Pattern (Request/Response)
  @MessagePattern({ cmd: 'GET_ALL_USERS' })
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  // POST User => Event Pattern (Event-Driven)
  @EventPattern({ cmd: 'CREATE_USER' })
  createUser(user: { name: string; email: string }) {
    this.appService.createUser(user);
  }
}
