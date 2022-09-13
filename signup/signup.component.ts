import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import constants from 'src/assets/constant';
import { identifierName } from '@angular/compiler';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  role: any;
  coachregisterForm!: FormGroup;
  userregisterForm!: FormGroup;

  coachForm:boolean=false;
  userForm:boolean=false;

  coos = constants

  get name(){ return this.coachregisterForm.controls['name']}
  get password(){ return this.coachregisterForm.controls['password']}
  get mobileNumber() { return this.coachregisterForm.controls['mobileNumber']}
  get gender() { return this.coachregisterForm.controls['gender']}
  get speciality() { return this.coachregisterForm.controls['speciality']}
  get dateOfBirth() { return this.coachregisterForm.controls['dateOfBirth']}
 
  

  get username(){ return this.userregisterForm.controls['username']}
  get userpassword(){ return this.userregisterForm.controls['userpassword']}
  get usermobileNumber() { return this.userregisterForm.controls['usermobileNumber']}
  get usergender() { return this.userregisterForm.controls['usergender']}
  get userdateOfBirth() { return this.userregisterForm.controls['userdateOfBirth']}
  get email() { return this.userregisterForm.controls['email']}
  get pincode() { return this.userregisterForm.controls['pincode']}
  get city() { return this.userregisterForm.controls['city']}
  get state() { return this.userregisterForm.controls['state']}
  get country() { return this.userregisterForm.controls['country']}
  
  

  constructor(private router: Router,private route: ActivatedRoute, private fb: FormBuilder, private http: SignupService) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role');   
    
    
    this.coachregisterForm = this.fb.group({
      name: ['', [Validators.required ,Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required ,Validators.minLength(5), Validators.maxLength(10)]],
      mobileNumber: ['',[Validators.required,validatenumber]],
      dateOfBirth: ['',[Validators.required,validateAge]],
      gender: ['',[Validators.required]],
      speciality: ['', [Validators.required ,Validators.minLength(10), Validators.maxLength(50)]]
    })

    this.userregisterForm = this.fb.group({
      username: ['', [Validators.required ,Validators.minLength(3), Validators.maxLength(50)]],
      userpassword: ['', [Validators.required ,Validators.minLength(5), Validators.maxLength(10)]],
      usermobileNumber: ['',[Validators.required,validatenumber]],
      userdateOfBirth: ['',[Validators.required,validateAge]],
      usergender: ['',[Validators.required]],
      email:['',[Validators.required]],
      pincode:['',[Validators.required,validatepincode]],
      city:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      state:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      country:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
     
    })
  }

  // userData={
  //   "name": "",
  //     "password": "",
  //     "gender": "",
  //     "dateOfBirth": "",
  //     "email": "",
  //     "mobileNumber"!:'',
  //     "pincode": 123456,
  //     "city": "",
  //     "state": "",
  //     "country": ""

  // }

  //userData = {} as any;
  userData:any =  {}
  coachId!:number
  userId!:number

  coachregister(){
    this.http.register(
      this.coachregisterForm.value,'coaches'
    )
    .subscribe({next:data=>{
      this.coachForm=true
      this.coachId = data.id
    }})
    // console.log(this.coachregisterForm);
    // console.log(this.coachregisterForm.valid,"aman");
    
    
    
    
  }
  directLogin(){
    this.router.navigate(['/login',this.role])
  }
  

  userregister(){
    this.userData.name = this.userregisterForm.value.username
    this.userData.password = this.userregisterForm.value.userpassword
    this.userData.gender = this.userregisterForm.value.usergender
    this.userData.dateOfBirth = this.userregisterForm.value.userdateOfBirth
    this.userData.mobileNumber = this.userregisterForm.value.usermobileNumber
    this.userData.email = this.userregisterForm.value.email
    this.userData.pincode = this.userregisterForm.value.pincode
    this.userData.city = this.userregisterForm.value.city
    this.userData.state = this.userregisterForm.value.state
    this.userData.country = this.userregisterForm.value.country
    

    
    this.http.register(this.userData,'users')
    
    .subscribe({next:data=>{
      this.userForm=true
      this.userId = data.id
      
      
    }})
  }
  
}
function validatenumber(c: FormControl): any {
  let mobileNumber = c.value.toString().length
   return mobileNumber == 10 ? null : {
     mobilenumberInvalid: {
       message: "Invalid Format!"
     }
   };

 }

 function validatepincode(c: FormControl): any {
  let pincode = c.value.toString().length
   return pincode == 6 ? null : {
     pincodeInvalid: {
       message: "Invalid Format!"
     }
   };

 }

 function validateAge(c: FormControl): any{
  let dob = new Date(c.value).valueOf()
  let today = new Date().valueOf()
  let age:number = (today - dob)/(1000*60*60*24*365)
  if(age<20 || age>100){
    return {dateOfBirthInvalid:{
      message:"Invalid Age"
    }
  }
  }
  else{
    return null;
  }


 }

 