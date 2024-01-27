import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-categories',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './update-categories.component.html',
  styleUrl: './update-categories.component.css'
})
export class UpdateCategoriesComponent {
  categoriesService = inject(CategoriesService)
  toast = inject(ToastrService)
  routerLocation = inject(Router)
  router = inject(ActivatedRoute);
  idCategories = ''
  formData = {
    name:''
  }

  ngOnInit(){
    this.router.params.subscribe((param)=>{
      this.idCategories = param['id']
      this.categoriesService.getDetail(this.idCategories).subscribe((response)=>{
        this.formData = {
          name: response.name
        }
      })
    })
  }

  onSubmit(categoryForm:any){
    if(categoryForm.valid){
      this.categoriesService.update(this.idCategories,this.formData).subscribe((response)=>{
        this.toast.success(response.message)
        this.routerLocation.navigateByUrl('/admin/categories/list')
      })
    }
  }
}
