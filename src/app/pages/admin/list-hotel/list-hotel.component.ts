import { Component, inject} from '@angular/core';

import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../types/hotel';
import { NgFor } from '@angular/common';
import { RankingStarComponent } from '../../../components/ranking-star/ranking-star.component';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [NgFor,RankingStarComponent,RouterLink],
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.css'
})
export class ListHotelComponent {
  constructor(private toastr: ToastrService) {}
  hotelSevices = inject(HotelsService)
  listHotels:Hotel[] = [] 
  ngOnInit(){
    this.hotelSevices.getHotelList().subscribe((response) => this.listHotels = response)
  }
  deleteHotel(id:string){
    if(id){
      const cf = confirm("Bạn có chắc chắn muốn xóa mục này ?")
      if(cf){
        this.hotelSevices.deleteHotel(id).subscribe((response) => {
          this.toastr.success(response.message);
          this.listHotels = this.listHotels.filter(item => item._id !== id);
        })
      }
    }
  }
}
