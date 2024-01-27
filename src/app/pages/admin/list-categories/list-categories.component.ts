import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { Categories } from '../../../types/categories';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  categoriesService = inject(CategoriesService)
  toast = inject(ToastrService)
  listCategories:Categories[]=[]
ngOnInit(){
  this.categoriesService.getAll().subscribe((response)=>{this.listCategories = response})
}
deleteCategories(id:string){
 const cf = confirm("Bạn có chắc chắn xóa danh mục này ?")
 if(cf){
  this.categoriesService.delete(id).subscribe((response)=>{
    this.toast.success(response.message)
    this.listCategories = this.listCategories.filter((category)=> category._id !== id)
  })
 }
}
}
