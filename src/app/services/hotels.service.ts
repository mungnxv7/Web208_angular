import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {Observable} from "rxjs"
import { Hotel } from '../types/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }
  apiUrl = 'https://backend-web-208-angular.vercel.app/hotels'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  getHotelList(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl); //axios.get(apiUrl)
  }
}
