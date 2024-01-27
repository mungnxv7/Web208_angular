import { Injectable ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  url = "https://provinces.open-api.vn/api/"
  http= inject(HttpClient)
  constructor() { }
  getProvincesAll(){
    return this.http.get(this.url+"?depth=1")
  }
  getDistrictByProvince(id:number){
    return this.http.get(`${this.url}p/${id}/?depth=2`)
  }
  getWardByDistricts(id:number){
    return this.http.get(`${this.url}d/${id}/?depth=2`)
  }
  getProvince(code:number){
    return this.http.get(`${this.url}/p/${code}/?depth=1`)
  }
  getDistrict(code:number){
    return this.http.get(`${this.url}/d/${code}/?depth=1`)
  }
  getWard(code:number){
    return this.http.get(`${this.url}/w/${code}/?depth=1`)
  }
}
