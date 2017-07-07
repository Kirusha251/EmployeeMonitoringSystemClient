import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx'
import {TimeRequest} from "../model/time-request";
@Injectable()
export class TimeAtWorkService {

  constructor(private  http: Http) { }
  getTimeAtWorkByFIO(fio: string, date: Date): Observable<string> {
    let headers = new Headers({'Content-type': 'application/json'});
    return this.http.post('http://localhost:8080/events/time-at-object',
      JSON.stringify(new TimeRequest(fio, date)),
      new RequestOptions({headers: headers}))
      .map((response: Response) => {
      return response.text();
      });
  }
}
