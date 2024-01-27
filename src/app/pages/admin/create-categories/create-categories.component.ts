import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categories',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './create-categories.component.html',
  styleUrl: './create-categories.component.css'
})
export class CreateCategoriesComponent {
  categoriesService = inject(CategoriesService)
  toast = inject(ToastrService)
  routerLocation = inject(Router)
  formData = {
    name:''
  }
  onSubmit(categoryForm:any){
    if(categoryForm.valid){
      this.categoriesService.create(this.formData).subscribe((response)=>{
        this.toast.success(response.message)
        this.routerLocation.navigateByUrl('/admin/categories/list')
      })
    }
  }
}
