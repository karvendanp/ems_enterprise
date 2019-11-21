import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'cnt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   users:Array<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = [];
    this.users = this.userService.getUsers();
  }
  
}
