import { Component, OnInit, inject } from '@angular/core';
import { ProvincesService } from '../../../services/provinces.service';
import { HotelsService } from '../../../services/hotels.service';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormHotel, Hotel } from '../../../types/hotel';

@Component({
  selector: 'app-update-hotel',
  standalone: true,
  imports: [AngularEditorModule,FormsModule,NgFor,NgIf,NgClass],
  templateUrl: './update-hotel.component.html',
  styleUrl: './update-hotel.component.css'
})
export class UpdateHotelComponent implements OnInit {
  provincesService = inject(ProvincesService)
  hotelSevices = inject(HotelsService)
  provinces:any = []
  districts:any = []
  wards:any = []
  hotelItem!:Hotel
  hotelId = ''
  router = inject(Router);
  route = inject(ActivatedRoute);
  htmlContent = '';

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

ngOnInit(){
  this.route.params.subscribe((param) => {
      this.hotelId = param['id'];
      this.hotelSevices.getHotelDetail(this.hotelId).subscribe((hotel)=> {
        this.hotelItem = hotel;
        this.provincesService.getProvincesAll().subscribe((respone) => this.provinces = respone)
        this.provincesService.getDistrictByProvince(hotel.address.province).subscribe((response) => this.districts = response)
        this.provincesService.getWardByDistricts(hotel.address.district).subscribe((response) => this.wards = response)
        this.formData = {
          hotelName: hotel.hotelName,
          hotelType:hotel.hotelType,
          hotelImage:{
            path:hotel.hotelImage.path
          },
          ranking:`${hotel.ranking}`,
          address: {
            province: hotel.address.province,
             
            district: hotel.address.district,
            ward:hotel.address.ward,
            street_address:hotel.address.street_address
          },
          descreiptionHotel: hotel.descreiptionHotel
        }
        console.log(this.formData);
        
      })
    });
  }
  getDistrictsByValueProvince(){
    if(this.formData.address.province){
      console.log(this.formData);
        
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
  
  onSubmit(hotelForm: any){
    if (hotelForm.valid) {
      console.log(this.formData);
      
    //  const data = {...this.formData, ranking: parseInt(this.formData.ranking)}
    //   this.hotelSevices.createHotel(data).subscribe((response)=> alert(response.message))
    }else{
      console.log("Thành  công");
    }
  }
}
