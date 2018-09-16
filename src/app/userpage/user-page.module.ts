import { NgModule } from "@angular/core";
import { UserPageComponent } from "./user-page/user-page.component";
import { UserListComponent } from "./userList/user-list.component";
import { UserItemComponent } from "./userList/user/user-Item.component";
import { ProfileComponent } from "./profile/profile.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,
    ProfileComponent,
    UserPageComponent
  ],
  providers: [],
  imports: [CommonModule, HttpClientModule],
  exports: [UserPageComponent]
})
export class UserPageModule {}
