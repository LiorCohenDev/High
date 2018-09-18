import { Component, Input } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user-Item.component.html",
  styleUrls: ["./user-Item.component.css"]
})
export class UserItemComponent {
  @Input()
  user: User;

  // openProfile() {
  //   console.log("open profile");
  // }
}
