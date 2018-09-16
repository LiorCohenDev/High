import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { User } from "./userList/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersSerive {
  constructor(private http: HttpClient) {}
  getUserList(): Observable<any[]> {
    // return of([new User("aa"), new User("bb")]);
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
}
