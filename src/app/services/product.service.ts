import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  apiUrl = 'https://react-typescript-web-backend.vercel.app/products'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  getProductList(){
    return this.http.get(this.apiUrl); //axios.get(apiUrl)
  }
}
