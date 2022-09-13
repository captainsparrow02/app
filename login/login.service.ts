import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  login(id:number, role:string):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/${role}/${id}`)

  }


}
