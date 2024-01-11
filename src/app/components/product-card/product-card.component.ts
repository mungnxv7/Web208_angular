import { Component, Input } from '@angular/core';
import { Hotel } from '../../types/hotel';
import { RankingStarComponent } from '../ranking-star/ranking-star.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RankingStarComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(){}
  @Input() hotel!:Hotel
}
