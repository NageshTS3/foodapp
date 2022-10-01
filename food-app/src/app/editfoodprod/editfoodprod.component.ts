import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodprodserService } from '../Services/foodprodser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editfoodprod',
  templateUrl: './editfoodprod.component.html',
  styleUrls: ['./editfoodprod.component.css']
})
export class EditfoodprodComponent implements OnInit {

  constructor(private route:ActivatedRoute, private product:FoodprodserService, private router:Router) { }
result:any
selsectedprod:any
  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log(id);
    console.log(typeof(id));
    this.product.getproductdata().subscribe((res)=>{
      this.result=res;
      console.log(this.result.data);
      
      for(let r of this.result.data){
        
        if(r.id == id){
          
          this.selsectedprod=r;
          console.log(this.selsectedprod);
          
        } 
      }
    })
  }
  editprod(form:NgForm){
    this.product.editproductdata(this.selsectedprod.id,form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['fp']);
      this.product.getproductdata().subscribe((res1)=>{
        this.result=res;
      })
    })
  }

}
