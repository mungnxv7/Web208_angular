import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userLocal } from '../../../config/viewLocal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user:any
ngOnInit(){

 this.user = userLocal.getUserLoacal()
}
 logOut(){
  userLocal.remove()
  location.href = ''
 }
}
