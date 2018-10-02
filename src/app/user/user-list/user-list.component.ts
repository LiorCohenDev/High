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

  private selectedUser: User;

  constructor() {
    this.onUserSelected = new EventEmitter();
  }

  clicked(user: User): void {
    this.selectedUser = user;
    this.onUserSelected.emit(user);
  }

  isSelected(user: User): boolean {
    if (!user || !this.selectedUser) return false;

    return user === this.selectedUser;
  }
}
