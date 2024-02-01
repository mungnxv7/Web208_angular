import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpLoadService {
  constructor() { }
  http=inject(HttpClient)
  url = `https://web208-angular-backend.vercel.app/upload`
  upLoad(file: any): Observable<any> {
    const formData = new FormData();
  formData.append('image', file);
    return this.http.post<any>(this.url,formData)
  }
}
