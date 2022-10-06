import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }
  getstaff(){
    return this.http.get("http://localhost:8080/users")
  }
  addstaffdetail(product:any){
    return this.http.post("http://localhost:8080/users",product)
  }
  editstaffdetail(id:any,product:any){
    return this.http.put(`http://localhost:8080/users/${id}`,product)
  }
  deletestaff(id:any){
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }
}
