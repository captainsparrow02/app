import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:string = "http://localhost:3000"
  constructor(private http:HttpClient) { 

   
}
  register(data:any, role:string):Observable<any>{

    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/${role}`,data,{
      headers:options
    })
  }

  
} 
