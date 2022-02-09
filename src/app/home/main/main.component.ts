import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userTypeID
  constructor(private authService:AuthService) { 
    let data =JSON.parse(localStorage.getItem('access_token'));
   const User = data.user;
    this.userTypeID= User.UserTypeId
    console.log(this.userTypeID)
    this.fnUserPermissions();
    
  }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
  }
  permission;
  addProduct = false;
  showProduct = false;
  showCustomer = false;
  showVendor=false;
  showCart=false;
  showReport=false;
  fnUserPermissions(){
    this.authService.getUserPermissions(this.userTypeID).subscribe((res:any)=>{
      this.permission = res;
      if(this.permission[0].addProduct == 1){
        this.addProduct = true;
      }
      if(this.permission[0].showProducts == 1){
        this.showProduct = true;
      }
      if(this.permission[0].Customers == 1){
        this.showCustomer = true;
      }
      if(this.permission[0].Vendor == 1){
        this.showVendor = true;
      }
      if(this.permission[0].Cart == 1){
        this.showCart = true;
      }
      if(this.permission[0].Reports == 1){
        this.showReport = true;
      }
    })
  } 

}
