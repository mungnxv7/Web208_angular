import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../types/hotel';
import { RankingStarComponent } from '../../../components/ranking-star/ranking-star.component';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [RankingStarComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent {
  route = inject(ActivatedRoute);
  hotelSevices = inject(HotelsService)
  hotelId = ''
  hotelDetail!:Hotel
  ngOnInit(){
    this.route.params.subscribe((param) => {
        this.hotelId = param['id'];
        this.hotelSevices.getHotelDetail(this.hotelId).subscribe((hotel)=> {
          this.hotelDetail = hotel;
        })
      });
    }
}
