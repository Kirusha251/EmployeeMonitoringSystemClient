import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import 'rxjs/Rx'
@Injectable()
export class EmployeeService {

  constructor(private  http: Http) { }

  getAllEmployees(): Observable<Employee[]>{
    let headers = new Headers({'Content-type': 'application/json'});
    return this.http.get('http://localhost:8080/employees', headers)
      .map(response => <Employee[]>response.json());
  }
}
