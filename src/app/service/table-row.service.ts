import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx'
import {TableRow} from "../model/table-row";
@Injectable()
export class TableRowService {

  constructor(private  http: Http) { }
  getTableRows(): Observable<TableRow[]>{

    return this.http.get('http://localhost:8080/table-rows', this.jwt())
      .map(response => <TableRow[]> response.json());
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
