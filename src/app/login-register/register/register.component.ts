import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private router: Router) {

  }

  openLogin() {
    this.router.navigateByUrl('/login-register/login');
  }
}
