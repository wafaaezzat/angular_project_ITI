import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  login(user : User) : Observable<any>{
    return this.httpClient.post<any>('https://mearn-stack-backend-test.herokuapp.com/user/login' ,user)
  }
}
