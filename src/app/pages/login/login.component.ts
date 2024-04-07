import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { userLocal } from '../../../config/viewLocal';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router)
  toastr = inject(ToastrService)
  userService = inject(UsersService)
  fomrLogin = {
    email:'admin@gmail.com',
    password:'Admin1'
  }
  onSubmit(loginForm:any){
    if(loginForm.valid){
      this.userService.login(this.fomrLogin).subscribe((response)=>{
        userLocal.setUserLocal({user:response.user, accessToken:response.accessToken})
        this.toastr.success(response.message)
        if(response.user.role == 'member'){
          this.router.navigateByUrl('')
        }else{
          this.router.navigateByUrl('/admin/hotels/list')
        }
      })

    }
  }
}
