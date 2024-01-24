import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../types/user';
import { NgFor, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [NgFor,RouterLink,TitleCasePipe],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  userService = inject(UsersService)
  toast = inject(ToastrService)
  listUser:User[] = []
  constructor(){}
ngOnInit(){
  this.userService.getAllUsers().subscribe((response)=> this.listUser = response)
}

deleteUser(id:string){
  const cf = confirm("Bạn có chắc chắn muốn xóa tài khoản này")
  if(cf){
    this.userService.deleteUsers(id).subscribe((response)=> {
      this.toast.success(response.message)
      this.listUser = this.listUser.filter(user => user._id !== id)
    })
  }
}
}
