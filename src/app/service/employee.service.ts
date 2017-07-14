import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import 'rxjs/Rx'
@Injectable()
export class EmployeeService {

  constructor(private  http: Http) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get('http://localhost:8080/employees', this.jwt())
      .map(response => <Employee[]>response.json());
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
