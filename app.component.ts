import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Y';
  logout = false;
  uProfile = false;
  cProfile = false;

  constructor(private router: Router){
    router.events.subscribe((val) => {
      this.logout = false;
      this.uProfile = false;
      this.cProfile = false;
      if (router.url === '/user/home' || router.url === '/user/profile' || router.url === '/user/appointments') {
        this.logout = true;
        this.uProfile = true;
        this.cProfile = false;
      } else if (router.url === '/coach/home' || router.url === '/coach/profile') {
        this.logout = true;
        this.uProfile = false;
        this.cProfile = true;
      } else {
        this.uProfile = false;
        this.logout = false;
        this.cProfile = false;
      }
    });
  }


  logoutFn() {
    this.router.navigate(['/home'])
  }
}
