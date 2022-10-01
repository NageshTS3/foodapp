import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FoodprodserService } from '../Services/foodprodser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addfoodprod',
  templateUrl: './addfoodprod.component.html',
  styleUrls: ['./addfoodprod.component.css']
})
export class AddfoodprodComponent implements OnInit {

  constructor(private product:FoodprodserService, private router:Router) { }
result:any
  ngOnInit(): void {

  }
  addprod(form:NgForm){
    
    form.value.menu={"id":form.value.menu_id}
    console.log(form.value);
    this.product.addproductdata(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['fp']);
      this.product.getproductdata().subscribe((res1)=>{
        this.result=res1;
      })
    })
  }

}
