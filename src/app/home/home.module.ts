import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { AddProductsComponent } from '../modules/add-products/add-products.component';
import { ProductsComponent } from '../modules/products/products.component';
import { CustomerComponent } from '../modules/customer/customer.component';
import { ReportsComponent } from '../modules/reports/reports.component';
import { VendorsComponent } from '../modules/vendors/vendors.component';
import { CartComponent } from '../modules/cart/cart.component';
import { FilterPipe } from '../shared/filter.pipe';



@NgModule({
  declarations: [
    MainComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    AddProductsComponent,
    ProductsComponent,
    CustomerComponent,
    ReportsComponent,
    VendorsComponent,
    CartComponent,
    FilterPipe

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule

  ]
})
export class HomeModule { }
