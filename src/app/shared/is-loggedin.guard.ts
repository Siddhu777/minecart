import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedinGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    let token = localStorage.getItem('access_token')
    if(token == null){
      return true;
    }
    this.router.navigate(['main'])
    return false;
   
  }
}
