import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  register(registrationRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registration`, registrationRequest);
  }
}
