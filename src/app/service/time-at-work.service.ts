import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx'
import {TimeRequest} from "../model/time-request";
@Injectable()
export class TimeAtWorkService {

  constructor(private  http: Http) { }
  getTimeAtWorkByFIO(fio: string, since: Date, until: Date, countMode: number): Observable<string> {
    return this.http.post('http://localhost:8080/events/time-at-object',
      JSON.stringify(new TimeRequest(fio, since, until, countMode)),
      this.jwt())
      .map((response: Response) => {
      return response.text();
      });
  }

  private jwt() {
    let userToken = localStorage.getItem('UserToken');
    if (userToken) {
      let headers = new Headers({'Authorization': userToken});
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({headers: headers});
    }
  }
}
