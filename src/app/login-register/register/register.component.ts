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

  username: string = '';
  password: string = '';

  onRegister() {
    console.log('Username:', this.username);
    console.log('Password', this.password);

    if (this.password.length < 8) {
      this.errorMessage = 'Password should be at least 8 characters long';
      return;
    }

    // Проверка наличия заглавной буквы в пароле
    if (!/[A-Z]/.test(this.password)) {
      this.errorMessage = 'Password should contain at least one uppercase letter';
      return;
    }

    // Все проверки пройдены, выполняем регистрацию
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.errorMessage = ''; // Сбрасываем сообщение об ошибке
    // Дополнительная логика для отправки запроса на сервер и т.д.
  }

  errorMessage: string = '';
}
