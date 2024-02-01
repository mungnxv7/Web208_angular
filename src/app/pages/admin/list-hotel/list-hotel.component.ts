import { Component, inject} from '@angular/core';

import { HotelsService } from '../../../services/hotels.service';
import { Hotel, ListHotel } from '../../../types/hotel';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RankingStarComponent } from '../../../components/ranking-star/ranking-star.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProvincesService } from '../../../services/provinces.service';
import { CategoriesService } from '../../../services/categories.service';
import { Categories } from '../../../types/categories';


@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [NgFor,RankingStarComponent,RouterLink,NgClass,NgIf],
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.css'
})
export class ListHotelComponent {
  constructor(){}
  route = inject(Router)
  toast = inject(ToastrService)
  router = inject(ActivatedRoute)
  hotelSevices = inject(HotelsService)
  categorySevices = inject(CategoriesService)
  provincesService = inject(ProvincesService)
  dropdowns = false
  listPages:number[] = []
  paramsUrl = {}
  pageActive = 0
  listHotels!:ListHotel
  listCategory:Categories[] = []
  arrayIdCategory:string[]=[]
  ngOnInit(){
    this.router.queryParams.subscribe((params)=>{
      this.paramsUrl = params
      this.fetchHotels(this.paramsUrl)
      if(params['filter'] ){
        this.arrayIdCategory = params['filter'].split(',')
      }
    })
    this.categorySevices.getAll().subscribe((response)=> this.listCategory = response)
  }
  fetchHotels(params:any){
    this.hotelSevices.getHotelList(params).subscribe((response)=>{
      this.listHotels = response
      if (this.listHotels.totalPages) {
        this.listPages = Array.from(Array(this.listHotels.totalPages), (_, i) => i+1);
      }
      this.pageActive=this.listHotels.page
      
    })
  }
   getProvince(code:number){
    this.provincesService.getProvince(code).subscribe((respronse)=>{
      console.log(respronse)
      
    })
   }

   onChangeCategory(id:string){
     const idExits = this.arrayIdCategory.includes(id)
      if(idExits){
      const index =this.arrayIdCategory.indexOf(id)
      this.arrayIdCategory.splice(index,1)
      
     }else{
      this.arrayIdCategory.push(id)
     }
     let categories:any = this.arrayIdCategory.join(',')
     if(this.arrayIdCategory.length == 0){
       categories=null
     }
     this.route.navigate(['/admin/hotels/list'],{queryParams: {filter: categories}});
     this.fetchHotels({filter:this.arrayIdCategory.join(',')})
   }

   dropDown(){
    if(this.dropdowns == false){
      this.dropdowns = true
    }else{
      this.dropdowns = false
    }
   }

  deleteHotel(id:string){
    if(id){
      const cf = confirm("Bạn có chắc chắn muốn xóa mục này ?")
      if(cf){
        this.hotelSevices.deleteHotel(id).subscribe((response) => {
          this.toast.success(response.message);
          this.listHotels.docs = this.listHotels.docs.filter(item => item._id !== id);
        })
      }
    }
  }
}
