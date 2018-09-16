import { Component, Input } from "@angular/core";
import { User } from "../userList/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  @Input()
  user: User;

  openPopup() {}
}
