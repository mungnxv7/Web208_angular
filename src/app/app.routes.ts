import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewUserComponent } from './layouts/view-user/view-user.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ViewAdminComponent } from './layouts/view-admin/view-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component:ViewUserComponent,children:[{path:'',component:HomeComponent}]},
    {path: 'shop', component:ViewUserComponent,children:[{path:'',component:ProductCardComponent}]},
    {path: 'admin', component:ViewAdminComponent,children:[{path:'dashboard',component:DashboardComponent}]}
];
