import { Component, OnInit } from '@angular/core';
import { FoodprodserService } from '../Services/foodprodser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foodproduct',
  templateUrl: './foodproduct.component.html',
  styleUrls: ['./foodproduct.component.css']
})
export class FoodproductComponent implements OnInit {

  constructor(private product:FoodprodserService, private router:Router) { }
result:any
  ngOnInit(): void {
    this.product.getproductdata().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
    })
  }
  deleteproduct(id:any){
    this.product.deleteProductdata(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['fp']);
      this.product.getproductdata().subscribe((res)=>{
        this.result=res;
      })
    })
  }

}
