import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodprodComponent } from './addfoodprod/addfoodprod.component';
import { EditfoodprodComponent } from './editfoodprod/editfoodprod.component';
import { FoodproductComponent } from './foodproduct/foodproduct.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"fp", component:FoodproductComponent},
  {path:"afp",component:AddfoodprodComponent},
  {path:"efp/:id",component:EditfoodprodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
