import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  allReports:any
  filterCategory:any;
  searchKey:string ="";
  constructor(private service:AuthService) {
    this.fnShowReport();
   }
  book
  ngOnInit(): void {
    // this.book=JSON.parse(localStorage.getItem('product'))
  // console.log(this.book.ProductCategory)
  }
  prdoCatArr = {
  }
  fnShowReport(){
    this.service.getRepors().subscribe((res:any)=>{
      // console.log(res)
      this.allReports=res;
      this.filterCategory = res;
    })

    this.service.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  filter(category){
    console.log(category)
    this.filterCategory = this.allReports
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  filt(e:any){
    console.log(e.target.value)
  }

} 
