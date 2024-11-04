import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [];
  // Test
  getHello(): string {
    return 'Hello World!';
  }

  // Get All Users
  getAllUsers() {
    return this.users.length > 0
      ? this.users
      : new NotFoundException('Not Found Users'); // Exption Filter
  }

  // Create User
  createUser(user: any) {
    this.users.push(user);
  }
}
