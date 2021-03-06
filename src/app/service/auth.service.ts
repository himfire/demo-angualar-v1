import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/api/v1/users'
  constructor(private http:HttpClient) {

  }
  register(form:any){
    return this.http.post(this.BASE_URL,form, );
  }

  login(form:any){
    return this.http.post(this.BASE_URL+"auth/login",form, {observe: 'response'});
  }
}
