import { Component, OnInit, Input } from "@angular/core";
import { Media } from "../Media.model";

@Component({
  selector: "app-media-list",
  templateUrl: "./media-list.component.html",
  styleUrls: ["./media-list.component.css"]
})
export class MediaListComponent implements OnInit {
  @Input()
  media: Media[];

  constructor() {}

  ngOnInit() {}
}
