import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewUserComponent } from './layouts/view-user/view-user.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ViewAdminComponent } from './layouts/view-admin/view-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CreateHotelComponent } from './pages/admin/create-hotel/create-hotel.component';
import { ListHotelComponent } from './pages/admin/list-hotel/list-hotel.component';
import { UpdateHotelComponent } from './pages/admin/update-hotel/update-hotel.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListUsersComponent } from './pages/admin/list-users/list-users.component';
import { CreateUserComponent } from './pages/admin/create-user/create-user.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { ListCategoriesComponent } from './pages/admin/list-categories/list-categories.component';
import { CreateCategoriesComponent } from './pages/admin/create-categories/create-categories.component';
import { UpdateCategoriesComponent } from './pages/admin/update-categories/update-categories.component';
import { HotelDetailComponent } from './pages/admin/hotel-detail/hotel-detail.component';

export const routes: Routes = [
    // {path: '', component:ViewUserComponent,children:[{path:'',component:HomeComponent}]},
    {path: '', component:LoginComponent},
    {path: 'shop', component:ViewUserComponent,children:[{path:'',component:ProductCardComponent}]},
    {path: 'register', component:RegisterComponent},
    
    {path: 'admin', component:ViewAdminComponent,children:[
        // hotels
        {path:'hotels/create',component:CreateHotelComponent},
        {path:'hotels/list',component:ListHotelComponent},
        {path:'hotels/edit/:id',component:UpdateHotelComponent},
        {path:'hotels/:id',component:HotelDetailComponent},
        // users
        {path:'users/list',component:ListUsersComponent},
        {path:'users/create',component:CreateUserComponent},
        {path:'users/edit/:id',component:UpdateUserComponent},
        // categories
        {path:'categories/list',component:ListCategoriesComponent},
        {path:'categories/create',component:CreateCategoriesComponent},
        {path:'categories/edit/:id',component:UpdateCategoriesComponent}
    ]},
];
