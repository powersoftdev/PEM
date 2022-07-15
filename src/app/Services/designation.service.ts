import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders   } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Designation } from '../Model/designation';
@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  API_URL : string= environment.API_URL;
  token :string=environment.loginToken;
    auth_token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${this.auth_token}`,
    "Accept": "*/*",
    'Access-Control-Allow-Origin': '*/*'

  });
  requestHeaderOption = { headers: this.headers };

  getAll():Observable<Designation>{ 
    return this.http.get<Designation>(this.API_URL+"/api/GetPayrollDesignationType/"+this.token, this.  requestHeaderOption );
   
 }
 
  addAndEdit(des: Designation): Observable<any> {
  const body=JSON.stringify(des); 
    return this.http.post<any>(this.API_URL+ '/api/AddPayrollDesignationType/'+this.token,body, this.requestHeaderOption);
  }


  //For Designation Update 
  update(Designation:Designation): Observable<Designation> {
  return this.http.post<Designation>(this.API_URL + '/api/AddPayrollDesignationType/' +this.token, this.requestHeaderOption + Designation.departmentId )
    .pipe(
      map(() => Designation)
      );
  }
 
//For Designation Delete
  delete(designationId:string): Observable<any> {
    return this.http.delete<any>(this.API_URL + '/api/DeletePayrollDesignationType/' + this.token+"?"+"DesignationId="+designationId,this.requestHeaderOption );
  }


}
