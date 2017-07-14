import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, Response} from "@angular/http";
@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:8080/login', JSON.stringify({ email: email, password: password }))
      .map((response: Response) => {
        let headers = response.headers.get('Authorization');
        if (headers) {
          localStorage.setItem('UserToken', headers.toString());
        }
      });
  }

  logout() {
    localStorage.removeItem('UserToken');
  }

}
