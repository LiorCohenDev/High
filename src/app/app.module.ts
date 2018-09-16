import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserPageModule } from "./userpage/user-page.module";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, UserPageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
