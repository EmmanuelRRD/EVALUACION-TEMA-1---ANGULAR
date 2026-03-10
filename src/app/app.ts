import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {


    if (this.username === 'admin' && this.password === 'admin') {

      this.router.navigate(['/pages/example']);

    } else {

      alert('Usuario o contraseña incorrectos');

    }

  }

}