import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categories } from '../types/categories';
import { Observable } from 'rxjs';
import { configHeaders } from '../../config/viewLocal';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor() { }
  apiUrl = 'https://web208-angular-backend.vercel.app/categories';
  http = inject(HttpClient)

  getAll():Observable<Categories[]>{
   return this.http.get<Categories[]>(this.apiUrl)
  }
  getDetail(id:string){
    return this.http.get<any>(this.apiUrl+`/${id}`)
  }
  delete(id: string){
    return this.http.delete<any>(`${this.apiUrl}/${id}`,{headers:configHeaders}); //axios.get(apiUrl)
  }
  create(data:any):Observable<any>{
    return this.http.post<any>(this.apiUrl, data,{headers:configHeaders} ); //axios.get(apiUrl)
  }
  update(id:string,data:any):Observable<any>{
    return this.http.put<any>(this.apiUrl+ `/${id}`, data ,{headers:configHeaders}); //axios.get(apiUrl)
  }
}
