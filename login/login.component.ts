import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import constants from '../../assets/constant';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  coachloginForm!:FormGroup;
  userloginForm!:FormGroup;
  role: any;

  get password(){ return this.coachloginForm.controls['password']}
  get id(){ return this.coachloginForm.controls['id']}

  get userpassword(){ return this.userloginForm.controls['userpassword']}
  get userid(){ return this.userloginForm.controls['userid']}


  constructor(private router: Router, private route: ActivatedRoute,private fb: FormBuilder, private LoginService: LoginService) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role');

    this.coachloginForm = this.fb.group({
      id: ['',[Validators.required]],
      password: ['', [Validators.required ,Validators.minLength(5), Validators.maxLength(10)]],
    })

    this.userloginForm = this.fb.group({
      userid: ['',[Validators.required]],
      userpassword: ['', [Validators.required ,Validators.minLength(5), Validators.maxLength(10)]],
    })
  }
    err!:boolean
    Login(role:string){

      if(role == 'coach'){
        this.LoginService.login(
          this.coachloginForm.value.id,'coaches'
        )
        .subscribe({next:data=>{ 
          if(data.password == this.coachloginForm.value.password){
            this.router.navigate(['/coach/home'])
          }
          else{
            this.err = true;
            
            
          }
        }})
      }

      else{
        this.LoginService.login(
          this.userloginForm.value.userid,'users'
        )
        .subscribe({next:data=>{
          if(data.password == this.userloginForm.value.userpassword){
            this.router.navigate(['/user/home'])
          }
          else{
            this.err = true;
            
            
          }
        }})
      }

     
    }
  

 
 
}
