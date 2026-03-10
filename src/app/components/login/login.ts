import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  username = '';
  password = '';

  constructor(private router: Router) { }

  login() {

    if (this.username != '' && this.password != '') {

      this.router.navigate(['/dashboard'], {
        queryParams: { username: this.username }
      });

    } else {

      alert('Credenciales incorrectas');

    }

  }

}