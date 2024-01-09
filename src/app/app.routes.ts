import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewUserComponent } from './layouts/view-user/view-user.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

export const routes: Routes = [
    {path: '', component:ViewUserComponent,children:[{path:'',component:HomeComponent}]},
    {path: 'shop', component:ViewUserComponent,children:[{path:'',component:ProductCardComponent}]}
];
