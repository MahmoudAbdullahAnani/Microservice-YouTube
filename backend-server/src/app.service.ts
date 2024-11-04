import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserCreatedEvent } from './user-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) {}
  // Get All Users
  getAllUsers() {
    return this.userService.send({ cmd: 'GET_ALL_USERS' }, {});
  }
  // Post User
  createUser(user: { name: string; email: string }) {
    return this.userService.emit(
      { cmd: 'CREATE_USER' },
      new UserCreatedEvent(user.name, user.email),
    );
  }
}
