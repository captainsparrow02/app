import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CoachhomeComponent } from './coach/coachhome/coachhome.component';
import { CoachprofileComponent } from './coach/coachprofile/coachprofile.component';
import { AppointmentsComponent } from './user/appointments/appointments.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { SignupService } from './signup/signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    CoachhomeComponent,
    CoachprofileComponent,
    AppointmentsComponent,
    UserhomeComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
