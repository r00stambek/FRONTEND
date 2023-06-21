import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  openRegister() {
    this.router.navigateByUrl('/login-register/register');
  }

  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Username:', this.username);
    console.log('Password', this.password);
  }
}

