import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FoodproductComponent } from './foodproduct/foodproduct.component';
import { AddfoodprodComponent } from './addfoodprod/addfoodprod.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditfoodprodComponent } from './editfoodprod/editfoodprod.component';
import { StaffdetailComponent } from './staffdetail/staffdetail.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { EditstaffComponent } from './editstaff/editstaff.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FoodproductComponent,
    AddfoodprodComponent,
    EditfoodprodComponent,
    StaffdetailComponent,
    AddstaffComponent,
    EditstaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
