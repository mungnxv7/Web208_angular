import { Component, NgModule, inject} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { ProvincesService } from '../../../services/provinces.service';
import { FormsModule} from '@angular/forms';
import { AngularEditorModule,AngularEditorConfig} from '@kolkov/angular-editor';
import { HotelsService } from '../../../services/hotels.service';
import { ToastrService } from 'ngx-toastr';



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
  provinces:any = []
  districts:any = []
  wards:any = []
  htmlContent = '';
  ngOnInit(){
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
  formData = {
    hotelName: '',
    hotelType:'',
    hotelImage:{
      path:''
    },
    ranking:'',
    address: {
      province:'',
      district:'',
      ward:'',
      street_address:''
    },
    descreiptionHotel: ''
  };
  onSubmit(hotelForm: any){
    if (hotelForm.valid) {
     const data = {...this.formData, ranking: parseInt(this.formData.ranking)}
      this.hotelSevices.createHotel(data).subscribe((response)=> this.toastr.success(response.message) )
    }
  }
}
