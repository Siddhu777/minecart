import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../modules/customer/customer.component';
import { ProductsComponent } from '../modules/products/products.component';
import { ReportsComponent } from '../modules/reports/reports.component';
import { VendorsComponent } from '../modules/vendors/vendors.component';
import { MainComponent } from './main/main.component';
import { AddProductsComponent } from '../modules/add-products/add-products.component';
import { CartComponent } from '../modules/cart/cart.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path:'',component:MainComponent,

  children:[
    {path:'',component:ProductsComponent,canActivate:[AuthGuard]},
    {path:'add_product',component:AddProductsComponent,canActivate:[AuthGuard]},
    {path:'customer',component:CustomerComponent,canActivate:[AuthGuard]},
    {path:'vendors',component:VendorsComponent,canActivate:[AuthGuard]},
    {path:'reports',component:ReportsComponent,canActivate:[AuthGuard]},
    {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
    // {path:'contact_us',component:ContactUsComponent,canActivate:[RoleGuard]},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
