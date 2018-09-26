import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MediaPageComponent } from "./media-page/media-page.component";
import { MediaListComponent } from "./media-list/media-list.component";
import { MediaItemComponent } from "./media-item/media-item.component";
import { MediaViewComponent } from './media-view/media-view.component';

@NgModule({
  declarations: [MediaListComponent, MediaItemComponent, MediaPageComponent, MediaViewComponent],
  providers: [],
  imports: [CommonModule, HttpClientModule],
  exports: [MediaPageComponent]
})
export class MediaPageModule {}
