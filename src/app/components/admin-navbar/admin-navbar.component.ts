import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../types/hotel';
import { RankingStarComponent } from '../ranking-star/ranking-star.component';
import { NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [FormsModule,RankingStarComponent,NgIf,NgFor,SlicePipe,RouterLink],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  hotelSevices = inject(HotelsService)
  textSearch:string = ''
  private searchSubject = new Subject<string>();
  router = inject(Router)
  listSearch:Hotel[] = []
  ngOnInit() {
    // Thêm debounceTime để chờ 1000ms (1 giây) trước khi gọi tới API
    this.searchSubject.pipe(debounceTime(1000)).subscribe(() => {
      if(this.textSearch){
        this.hotelSevices.searchHotels(this.textSearch).subscribe((response) => this.listSearch = response)
      }else{
        this.listSearch = []
      }
    });
  }
  onChangeSearch(){
    this.searchSubject.next(this.textSearch)
  }
}
