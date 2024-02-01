import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {Observable} from "rxjs"
import { Hotel } from '../types/hotel';
import { configHeaders } from '../../config/viewLocal';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }
  apiUrl = 'https://web208-angular-backend.vercel.app/hotels'// khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  getHotelList(params:any){
    return this.http.get<any>(`${this.apiUrl}`,{params:params})
  }
  searchHotels(params:any){
    return this.http.get<any>(`${this.apiUrl}/search`,{params:{name:params}})
  }
  deleteHotel(id: string){
    return this.http.delete<any>(`${this.apiUrl}/${id}`,{headers:configHeaders})
  }
  createHotel(hotel:any):Observable<any>{
    return this.http.post<any>(this.apiUrl, hotel,{headers:configHeaders} )
  }
  updateHotel(id:string,hotel:any):Observable<any>{
    return this.http.put<any>(this.apiUrl+ `/${id}`,hotel,{headers:configHeaders} )
  }
  getHotelDetail(id: string):Observable<Hotel>{
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`)
  }
}
