import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";
import {Observable} from "rxjs";
import {User} from "../model/user";
@Injectable()
export class UserService {

  constructor(private http: Http,
              private router: Router,
              private alertService: AlertService) { }
  create(email: string, username: string, password: string) {
    return this.http.post('http://localhost:8080/user/create',
      JSON.stringify({username: username, password: password, email: email}) , this.jwt()).
    map((response: Response) => {
    });
  }

  getSignedUser(): Observable<User> {
    return this.http.get('http://localhost:8080/user/signed', this.jwt())
      .map(response => <User> response.json());
  }

  private jwt() {
    let userToken = localStorage.getItem('UserToken');
    if (userToken) {
      let headers = new Headers({'Authorization': userToken});
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({headers: headers});
    }else{
      let headers = new Headers({'Content-Type': 'application/json'});
      return new RequestOptions({headers: headers});
    }
  }
}
