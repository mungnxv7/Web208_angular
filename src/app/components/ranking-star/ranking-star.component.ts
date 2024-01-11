import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-star',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ranking-star.component.html',
  styleUrl: './ranking-star.component.css'
})
export class RankingStarComponent {
@Input () numberRank!: number
arrRank: number[] = []
ngOnInit() {
  if (this.numberRank) {
    this.arrRank = Array.from(Array(this.numberRank), (_, i) => i);
  }
}
}