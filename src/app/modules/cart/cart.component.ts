import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  user:any;
  userData:any
  obj={
    CustomerName:'',
    Mobile:'',
    Address:'',
    Title:'',
    Price:'',
    ProductCategory:''

  }
  constructor(private router:Router,private service:AuthService) {
    this.products =JSON.parse(localStorage.getItem('product'))
    this.userData =JSON.parse(localStorage.getItem('access_token'))
    this.user = this.userData.user;

    this.obj.CustomerName = this.user.Name;
    this.obj.Mobile = this.user.Mobile;
    this.obj.Address = this.user.Address;
    this.obj.Title = this.products.Title;
    this.obj.Price = this.products.Price;
    this.obj.ProductCategory = this.products.ProductCategory;
  }

  ngOnInit(): void {
  }

  Buy(products){
    console.log(this.obj)
    this.service.createTaxInvoice(this.obj).subscribe((res:any)=>{
      console.log(res)
      localStorage.removeItem('product');
      this.router.navigate(['/'])
    })
   
  }

}
