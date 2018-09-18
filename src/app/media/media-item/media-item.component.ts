import { Component, OnInit, Input } from "@angular/core";
import { Media } from "../Media.model";

@Component({
  selector: "app-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"]
})
export class MediaItemComponent implements OnInit {
  @Input()
  item: Media;

  constructor() {}

  ngOnInit() {}
}
