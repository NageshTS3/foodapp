import { Component, OnInit } from '@angular/core';
import { StaffService } from '../Services/staff.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staffdetail',
  templateUrl: './staffdetail.component.html',
  styleUrls: ['./staffdetail.component.css']
})
export class StaffdetailComponent implements OnInit {

  constructor(private staff:StaffService, private router:Router ) { }
result:any
  ngOnInit(): void {
    this.staff.getstaff().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }
  deletestaff(id:any){
    this.staff.deletestaff(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['staff']);
      this.staff.getstaff().subscribe((res)=>{
        this.result=res;
      })
    })
  }
}
