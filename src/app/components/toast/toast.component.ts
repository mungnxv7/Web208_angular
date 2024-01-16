import { NgIf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
 @Output() show:boolean = true
  // showToast(status:boolean, message:string){
  //   this.status = status
  //   this.message = message
  //   setTimeout(()=>{
  //     this.show = true
  //   },2000)
  // }
}
