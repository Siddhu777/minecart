import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  frmAddProduct;
  constructor(private service:AuthService) {
    this.fnGetAllProducts();
    this.fnGetAllProdCategory();
   }
 

  ngOnInit(): void {
    this.frmAddProduct=new FormGroup({
      ProductName:new FormControl(''),
      Title:new FormControl(''),
      Description:new FormControl(''),
      Price:new FormControl(''),
      ProductCode:new FormControl(''),
      ProductCategoriesId:new FormControl('')
    })
  }
  addProduct(form){
    this.service.postProduct(this.frmAddProduct.value).subscribe((res:any)=>{
      console.log(res)
    })
    console.log(this.frmAddProduct.value)
  }
  
  products;
  fnGetAllProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products = res;
      })
  }
  allProdCategory;
  fnGetAllProdCategory(){
    this.service.getProductCategory().subscribe((res:any)=>{
      this.allProdCategory = res
      console.log(res)
    })
  }

}
