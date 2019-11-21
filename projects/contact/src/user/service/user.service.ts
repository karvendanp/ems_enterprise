import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor() { }
  getUsers(): Array<User>
  {
    return [
      {
        firstName: "Neo",
        lastName: "Anderson"
      },
      {
        firstName: "tester",
        lastName:"master",
      }
    ];
  }
}
