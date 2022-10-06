import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodprodComponent } from './addfoodprod/addfoodprod.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { EditfoodprodComponent } from './editfoodprod/editfoodprod.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { FoodproductComponent } from './foodproduct/foodproduct.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"fp", component:FoodproductComponent},
  {path:"afp",component:AddfoodprodComponent},
  {path:"efp/:id",component:EditfoodprodComponent},
  {path:"staff", component:StaffdetailComponent},
  {path:"addstaff", component:AddstaffComponent},
  {path:"editstaff/:id",component:EditstaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
