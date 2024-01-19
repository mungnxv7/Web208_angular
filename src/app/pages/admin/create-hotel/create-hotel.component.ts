import { Component, NgModule, inject} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { ProvincesService } from '../../../services/provinces.service';
import { FormsModule} from '@angular/forms';
import { AngularEditorModule,AngularEditorConfig, AeSelectComponent} from '@kolkov/angular-editor';
import { HotelsService } from '../../../services/hotels.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormHotel } from '../../../types/hotel';




@Component({
  selector: 'app-create-hotel',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,AngularEditorModule],
  templateUrl: './create-hotel.component.html',
  template:`<angular-editor [placeholder]="Enter text here..." [(ngModel)]="htmlContent"></angular-editor>`,
  styleUrl: './create-hotel.component.css'
})
export class CreateHotelComponent {
  constructor(private toastr: ToastrService) {}
  provincesService = inject(ProvincesService)
  hotelSevices = inject(HotelsService)
  router = inject(Router)
  provinces:any = []
  districts:any = []
  wards:any = []
  htmlContent = '';
  ngOnInit(){
    this.provincesService.getProvincesAll().subscribe((respone) => this.provinces = respone )
  }
  
  
  getDistrictsByValueProvince(){
    if(this.formData.address.province){
      const codeProvince = this.formData.address.province
      this.provincesService.getDistrictByProvince(codeProvince).subscribe((response) => this.districts = response)
    }
  }
  getWardByValueDistrict(){
    if(this.formData.address.district){
      const codeDistrict = this.formData.address.district
      this.provincesService.getWardByDistricts(codeDistrict).subscribe((response) => this.wards = response)
    }
  }
  editorConfig: AngularEditorConfig = {
    uploadUrl: 'assets/image',
    editable: true,
      spellcheck: true,
      height: '150px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',

  }
  formData:FormHotel = {
    hotelName: '',
    hotelType:'',
    hotelImage:{
      path:''
    },
    ranking:'',
    address: {
      province:null,
      district:null,
      ward:null,
      street_address:''
    },
    descreiptionHotel: ''
  };
  onSubmit(hotelForm: any){
    if (hotelForm.valid) {
     const data = {...this.formData, ranking: parseInt(this.formData.ranking)}
      this.hotelSevices.createHotel(data).subscribe((response)=> {
        this.toastr.success(response.message)
        this.router.navigateByUrl('/admin/hotels/list')
      })
    }
  }
}
