import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login, Register, User } from '../types/user';
import { Observable } from 'rxjs';
import { configHeaders } from '../../config/viewLocal';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  apiUrl = 'https://web208-angular-backend.vercel.app/auth';
  http = inject(HttpClient)
  
  login(data:Login){
    return this.http.post<any>(this.apiUrl+'/login',data)
  }
  register(data:Register){
    return this.http.post<any>(this.apiUrl+'/register',data)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }
  getUserDetail(id:string){
    return this.http.get<any>(this.apiUrl+`/${id}`)
  }
  updateUser(data:any,id:string){
    return this.http.patch<any>(this.apiUrl+`/${id}`,data,{headers:configHeaders})
  }
  deleteUsers(id:string){
    return this.http.delete<any>(this.apiUrl+`/${id}`,{headers:configHeaders})
  }
  
}
