import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MediaPageComponent } from "../media/media-page/media-page.component";
import { UserPageComponent } from "../user/user-page/user-page.component";
import { UserPageModule } from "../user/user.module";
import { MediaPageModule } from "../media/media.module";

const appRoutes: Routes = [
  { path: "user", component: UserPageComponent },
  { path: "media", component: MediaPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    UserPageModule,
    MediaPageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
  // declarations: [UserPageComponent, MediaPageComponent]
})
export class RoutingModule {}
