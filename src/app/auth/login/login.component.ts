import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  constructor(public fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signinForm = this.fb.group({
      Email: [''],
      Password: ['']
    })
  }

  ngOnInit(): void {
  }
  logintoken: any;
  loginUser() {
    if (this.signinForm.valid) {
      this.authService.login(this.signinForm.value).subscribe((res: any) => {
        console.log("After login res",res)
        if (res.token) {
          alert("Login Succesfull")
          this.logintoken = res.token;
          var userDetails = res.user
          localStorage.setItem('access_token', JSON.stringify(res))
          localStorage.setItem('jwt_token', JSON.stringify(this.logintoken));
          // userDetails.UserType == 1 ? localStorage.setItem('userType', 'admin') : localStorage.setItem('userType', 'employee')
         if(userDetails.UserTypeId == 1){
          localStorage.setItem('userType', 'admin');
         }else if(userDetails.UserType == 2){
          localStorage.setItem('userType', 'vendor');
         }else{
          localStorage.setItem('userType', 'customer');
         }
          this.router.navigate(['main'])
        }

      })
    }

    // this.authService.isAuthenticated()
  }


}

