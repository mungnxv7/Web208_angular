import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { userLocal } from '../../../config/viewLocal';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-view-admin',
  standalone: true,
  imports: [RouterOutlet,AdminNavbarComponent,RouterLink,NgClass],
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.css'
})
export class ViewAdminComponent {
  router = inject(Router)
  activateRoute = inject(ActivatedRoute)
  active=""
  isActive(url: string): boolean {
    return this.router.url.startsWith(url);
  }
  ngOnInit(){
    const data = userLocal.getUserLoacal()
    if(data){
      if(data.user.role !== 'admin'){
        this.router.navigateByUrl('')
      }
     }

     
    
  }
}
