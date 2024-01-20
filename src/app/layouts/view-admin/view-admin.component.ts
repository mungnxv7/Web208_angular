import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { userLocal } from '../../../config/viewLocal';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';



@Component({
  selector: 'app-view-admin',
  standalone: true,
  imports: [RouterOutlet,AdminNavbarComponent,RouterLink],
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.css'
})
export class ViewAdminComponent {
  router = inject(Router)

  ngOnInit(){
    const data = userLocal.getUserLoacal()
    if(data){
      if(data.user.role !== 'admin'){
        this.router.navigateByUrl('')
      }
     }else{
      this.router.navigateByUrl('')
     }
  }
}
