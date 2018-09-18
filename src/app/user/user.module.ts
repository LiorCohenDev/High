import { NgModule } from "@angular/core";
import { UserPageComponent } from "./user-page/user-page.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserItemComponent } from "./user-list/user-item/user-item.component";
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
