import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn = localStorage.getItem("user_auth");
  userName = localStorage.getItem("userName");
  isResponsive = false;

  constructor(private router: Router){}

  toggleMenu() {
    this.isResponsive = !this.isResponsive;
  }

  logout(){
    localStorage.removeItem("user_auth");
    window.location.reload();
    this.router.navigate(['/signin'])
  }
}
