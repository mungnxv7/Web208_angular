import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  toast =inject(ToastrService)
  userService = inject(UsersService)
  router = inject(Router)
  confirmPassword=''
  fomrRegister = {
    name:'',
    email:'',
    password:'',
    role: 'member'
  }
  onSubmit(loginForm:any){
    if(loginForm.valid){
      if(this.fomrRegister.password === this.confirmPassword){
        this.userService.register(this.fomrRegister).subscribe((response)=>{
          this.toast.success(response.message)
          this.router.navigateByUrl('/login')
        })
      }
      
    }
  }
}
