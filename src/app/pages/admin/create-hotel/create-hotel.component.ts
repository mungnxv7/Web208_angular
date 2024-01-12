import { Component, inject} from '@angular/core';
import {NgFor, AsyncPipe} from '@angular/common';
import { ProvincesService } from '../../../services/provinces.service';

@Component({
  selector: 'app-create-hotel',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './create-hotel.component.html',
  styleUrl: './create-hotel.component.css'
})
export class CreateHotelComponent {
  provincesService = inject(ProvincesService)
  provinces:any = []
  districts:any = []
  wards:any = []
  ngOnInit(){
    this.provincesService.getProvincesAll().subscribe((respone) => this.provinces = respone )
  }
  getDistrictsByValueProvince(event: Event){
    const selectedValue= (event.target as HTMLSelectElement).value;
    this.provincesService.getDistrictByProvince(selectedValue).subscribe((response) => this.districts = response)
  }
  getWardByValueDistrict(event: Event){
    const selectedValue= (event.target as HTMLSelectElement).value;
    this.provincesService.getWardByDistricts(selectedValue).subscribe((response) => console.log(response)
    )
  }
}
