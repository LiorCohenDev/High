import { Component, Input, EventEmitter, Output } from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: "app-userlist",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent {
  @Input()
  users: User[];

  @Output()
  onUserSelected: EventEmitter<User>;

  constructor() {
    this.onUserSelected = new EventEmitter();
  }

  clicked(user: User): void {
    this.onUserSelected.emit(user);
  }
}
