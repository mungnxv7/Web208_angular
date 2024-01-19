import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { userLocal } from '../../../config/userLocal';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  toastr = inject(ToastrService)
  userService = inject(UsersService)
  fomrLogin = {
    email:'',
    password:''
  }
  onSubmit(loginForm:any){
    if(loginForm.valid){
      this.userService.login(this.fomrLogin).subscribe((response)=>{
        console.log(response);
        
        // this.toastr.success(response.message)
        // userLocal.setUserLocal(response.data)
      })

    }
  }
}
