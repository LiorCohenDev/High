import { Component, EventEmitter } from "@angular/core";
import { UsersSerive } from "../users.service";
import { User } from "../userList/user.model";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.css"]
})
export class UserPageComponent {
  users: User[];
  selectedUser: User;

  constructor(private usersSerive: UsersSerive) {
    this.usersSerive.getUserList().subscribe(users => {
      this.users = users;
    });
  }

  userSelected(user: User): void {
    console.log("User selected: ", user);
    this.selectedUser = user;
  }
}
