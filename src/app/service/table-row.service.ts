import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx'
import {TableRow} from "../model/table-row";
@Injectable()
export class TableRowService {

  constructor(private  http: Http) { }
  getTableRows(): Observable<TableRow[]>{
    let headers = new Headers({'Content-type': 'application/json'});
    return this.http.get('http://localhost:8080/table-rows', headers)
      .map(response => <TableRow[]> response.json());
  }
}
