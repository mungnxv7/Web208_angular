import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';



@Component({
  selector: 'app-view-admin',
  standalone: true,
  imports: [RouterOutlet,AdminNavbarComponent,RouterLink],
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.css'
})
export class ViewAdminComponent {
  
}
