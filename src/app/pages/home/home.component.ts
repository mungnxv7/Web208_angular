import { Component, inject } from '@angular/core';
import { HotelsService} from '../../services/hotels.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { userLocal } from '../../../config/viewLocal';
import { Hotel } from '../../types/hotel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ProductCardComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hotelsService = inject(HotelsService);
  hotelList:Hotel[] = [];
  ngOnInit(): void {
    this.hotelsService
      .getHotelList()
      .subscribe((response) => (this.hotelList = response)); // callApi.then(cb fuc)
  }
}
