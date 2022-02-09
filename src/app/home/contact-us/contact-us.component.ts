import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private compService:AuthService) { }
  companyId:number;
  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('access_token'))
    const user = data.user
    this.companyId = user.CompaniesId;
    this.dispCompanyDetails();
  }
  data:any;
  dispCompanyDetails() {
    this.compService.getCompanyDetails(this.companyId).subscribe((res: any) => {
      this.data=res;
      console.log(res)
    })
  }

}
