import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  companyID:number;
  tempCompanyId: any;
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fnGetUserTypes();

    this.signUpForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      Address: ['', Validators.required],
      Password: ['', Validators.required],
      UserTypeId: (''),
      // Description: ['',Validators.required]
    })
  }
  fnSignUp() {
    // console.log(this.signUpForm.value)
    if (this.signUpForm.valid) {
        this.authService.signupUser(this.signUpForm.value).subscribe((res) => {
          console.log(res)
        this.router.navigate(['/'])
      })
    }
  }
  userTypes;
  fnGetUserTypes(){
    this.authService.getUserTypes().subscribe((res:any)=>{
      this.userTypes=res;
      console.log(res)
    })
  }

}
