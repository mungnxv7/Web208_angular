import { Component, inject } from '@angular/core';
import { ProvincesService } from '../../../services/provinces.service';
import { HotelsService } from '../../../services/hotels.service';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../../types/hotel';

@Component({
  selector: 'app-update-hotel',
  standalone: true,
  imports: [AngularEditorModule,FormsModule,NgFor,NgIf],
  templateUrl: './update-hotel.component.html',
  styleUrl: './update-hotel.component.css'
})
export class UpdateHotelComponent {
  provincesService = inject(ProvincesService)
  hotelSevices = inject(HotelsService)
  provinces:any = []
  districts:any = []
  wards:any = []
  hotelId = ''
  router = inject(Router);
  route = inject(ActivatedRoute);
  htmlContent = '';

  formData = {
    hotelName: '',
    hotelType:'',
    hotelImage:{
      path:''
    },
    ranking:'',
    address: {
      province: '',
      district:'',
      ward:'',
      street_address:''
    },
    descreiptionHotel: ''
};

  ngOnInit(){
    this.route.params.subscribe((param) => {
      this.hotelId = param['id'];
      console.log(this.hotelId);
      return this.hotelSevices.getHotelDetail(this.hotelId).subscribe((hotel)=> {
        this.formData = {
          hotelName: hotel.hotelName,
          hotelType:hotel.hotelType,
          hotelImage:{
            path:hotel.hotelImage.path
          },
          ranking:`${hotel.ranking}`,
          address: {
            province:hotel.address.province,
            district: '',
            ward:hotel.address.ward,
            street_address:hotel.address.street_address
          },
          descreiptionHotel: hotel.descreiptionHotel
        }
      })
    });
    this.provincesService.getProvincesAll().subscribe((respone) => this.provinces = respone )
  }
  
  


  
  getDistrictsByValueProvince(event: Event){
    const selectedIdProvince= (event.target as HTMLSelectElement).selectedOptions[0].getAttribute('data-id');
   if(selectedIdProvince){
    this.provincesService.getDistrictByProvince(selectedIdProvince).subscribe((response) => this.districts = response)
   }
  }
  getWardByValueDistrict(event: Event){
    const selectedIdDistrict= (event.target as HTMLSelectElement).selectedOptions[0].getAttribute('data-id');
    if(selectedIdDistrict){
      this.provincesService.getWardByDistricts(selectedIdDistrict).subscribe((response) => this.wards = response)
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
     const data = {...this.formData, ranking: parseInt(this.formData.ranking)}
      this.hotelSevices.createHotel(data).subscribe((response)=> alert(response.message))
    }else{
      console.log("Thành  công");
    }
  }
}
