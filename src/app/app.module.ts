import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserPageModule } from "./user/user.module";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { MediaPageModule } from "./media/media.module";

import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    UserPageModule,
    MediaPageModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
