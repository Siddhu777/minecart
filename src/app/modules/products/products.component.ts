import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service:AuthService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.fnGetAllProducts();
  }
  products
  fnGetAllProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products = res;
      console.log(res)
    })
  }

  addtocart(product){
    localStorage.setItem("product",JSON.stringify(product))
    console.log(product)
  }

  images
  image: SafeUrl | null = null;
  thumbnail
  // fnGetAllProductsImages(){
  //   const mediaType = 'application/image';
  //   this.service.getAllProductsImages(1).subscribe((res:any)=>{
  //     console.log(JSON.stringify(res))
  //     let objectURL = 'data:image/jpeg;base64,' + res;
  //        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);

  //     // const blob = new Blob([res], { type: mediaType });
  //     // const unsafeImg = URL.createObjectURL(blob);
  //     // this.image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //   //  const unsafeImageUrl = URL.createObjectURL(res);
  //   //   this.images = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
  //     console.log(this.image)
  //   })
  // }

}
