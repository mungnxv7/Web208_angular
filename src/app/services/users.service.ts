import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login, Register } from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  apiUrl = 'https://backend-web-208-angular.vercel.app/users';
  http = inject(HttpClient)
  
  configHeaders = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  login(data:Login){
    return this.http.post<any>(this.apiUrl+'/signin',data)
  }
  register(data:Register){
    return this.http.post<any>(this.apiUrl+'/signup',data)
  }
}
