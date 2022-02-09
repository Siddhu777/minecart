import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public search = new BehaviorSubject<string>("");
  // userLoginUrl = "https://billsoftapi.instasolsofttech.com/user/";
  serverUrl="http://localhost:5000/admin/";
  userLoginUrl = "http://localhost:5000/user/";
  baseUrl = "http://localhost:5000/";
  httpHeaders = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient,private router:Router) { }
  login(user:any){
    return this.http.post(`${this.userLoginUrl}login`,user,{headers: this.httpHeaders})
  }
  IsLoggedIn(){
    // return true;
    return !!localStorage.getItem('jwt_token')
  }
  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
  getCompanyDetails(companyId){
    return this.http.get(`${this.serverUrl}company_profile/${companyId}`)
  }
  getUserTypes(){
    return this.http.get(`${this.userLoginUrl}usertype`,{headers: this.httpHeaders})
  }
  signupUser(form:any){
    return this.http.post(`${this.userLoginUrl}`,form,{headers: this.httpHeaders})
  }
  getUserPermissions(id:number){
    return this.http.get(`${this.userLoginUrl}permission/${id}`);
  }

  getAllProducts(){
    return this.http.get(`${this.baseUrl}products`);
  }
  getAllProductsImages(id){
    return this.http.get(`${this.baseUrl}products/images/${id}`, { responseType: 'blob'});
  }

  postProduct(form:any){
    return this.http.post(`${this.baseUrl}products`,form);
  }
  
  getProductCategory(){
    return this.http.get(`${this.baseUrl}productcategory`);
  }
  createTaxInvoice(form){
    return this.http.post(`${this.baseUrl}Invoices`,form)
  }
  getRepors(){
    return this.http.get(`${this.baseUrl}Invoices`);
  }

}
