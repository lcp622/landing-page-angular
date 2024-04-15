import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:productId', component: ProductDetailComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];
