import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {Observable} from "rxjs"
import { Hotel } from '../types/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  configHeaders = {
    headers: {
      accept: 'application/json',
    }
  }

  constructor() { }
  apiUrl = 'https://web208-angular-backend.vercel.app/hotels'// khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  getHotelList(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl); //axios.get(apiUrl)
  }
  deleteHotel(id: string){
    return this.http.delete<any>(`${this.apiUrl}/${id}`); //axios.get(apiUrl)
  }
  createHotel(hotel:any):Observable<any>{
    return this.http.post<any>(this.apiUrl, hotel,this.configHeaders ); //axios.get(apiUrl)
  }
  updateHotel(id:string,hotel:any):Observable<any>{
    return this.http.put<any>(this.apiUrl+ `/${id}`, hotel,this.configHeaders ); //axios.get(apiUrl)
  }
  getHotelDetail(id: string):Observable<Hotel>{
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`); //axios.get(apiUrl)
  }
}
