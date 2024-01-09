import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {

}
