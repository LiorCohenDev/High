import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MediaService {
  constructor(private http: HttpClient) {}
  getMediaList(): Observable<any[]> {
    // return of([new User("aa"), new User("bb")]);
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/photos");
  }
}
