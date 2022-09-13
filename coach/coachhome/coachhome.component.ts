import { Component, OnInit } from '@angular/core';
import { CoachhomeService } from './coachhome.service';
import  constants  from '../../../assets/constant'
import { scheduled } from 'rxjs';

@Component({
  selector: 'app-coachhome',
  templateUrl: './coachhome.component.html',
  styleUrls: ['./coachhome.component.css']
})
export class CoachhomeComponent implements OnInit {

  consta = constants

  constructor(private coachhomeservice:CoachhomeService) {
    
   }
  data!:any
  ngOnInit(): void {
   this.schedules()
  }

  schedules(){
    this.coachhomeservice.schedules().subscribe({next:data=>{this.data = data
    console.log(data)}})
  }

}



