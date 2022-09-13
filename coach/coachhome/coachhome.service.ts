import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoachhomeService {
  url:string = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  schedules():Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/bookings`)
  }
}
