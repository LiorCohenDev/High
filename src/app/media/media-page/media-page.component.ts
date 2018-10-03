import { Component, OnInit } from "@angular/core";
import { Media } from "../Media.model";
import { MediaService } from "../media.service";

@Component({
  selector: "app-media-page",
  templateUrl: "./media-page.component.html",
  styleUrls: ["./media-page.component.css"]
})
export class MediaPageComponent implements OnInit {
  media: Media[];

  constructor(private mediaSerive: MediaService) {}

  ngOnInit() {
    this.mediaSerive.getMediaList().subscribe(media => {
      this.media = media;
    });
  }
}
