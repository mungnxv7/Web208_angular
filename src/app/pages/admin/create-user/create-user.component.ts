import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../../../types/user';
import { UsersService } from '../../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  toast = inject(ToastrService)
  routerLodation = inject(Router)
  userService = inject(UsersService)
formData:Register = {
  name:'',
  email:'',
  role:'',
  password:''
}

onSubmit(userForm:any){
  if(userForm.valid){
    this.userService.register(this.formData).subscribe((response)=>{
      this.toast.success(response.message);
      this.routerLodation.navigateByUrl('/admin/user/list')
    },error=>{
      this.toast.error(error.error.message)
    }
    )
  }
}
}
