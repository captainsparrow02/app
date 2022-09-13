import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component'
import { AppointmentsComponent } from './user/appointments/appointments.component';
import { CoachhomeComponent } from './coach/coachhome/coachhome.component';
import { CoachprofileComponent } from './coach/coachprofile/coachprofile.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login/:role", component: LoginComponent},
  {path: "signup/:role", component: SignupComponent},
  {path: "user/home", component: UserhomeComponent},
  {path: "user/profile", component: UserprofileComponent},
  {path: "user/appointments", component: AppointmentsComponent},
  {path: "coach/home", component: CoachhomeComponent},
  {path: "coach/profile", component: CoachprofileComponent},
  {path: "**", component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }