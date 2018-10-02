import { Component, Input, HostBinding } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user-Item.component.html",
  styleUrls: ["./user-Item.component.css"]
})
export class UserItemComponent {
  @Input()
  user: User;

  @Input()
  user1: User;

  @HostBinding("attr.class")
  cssClass = "item";
  // openProfile() {
  //   console.log("open profile");
  // }
}
