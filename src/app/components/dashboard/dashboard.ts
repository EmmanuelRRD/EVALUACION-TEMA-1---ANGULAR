import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carpeta } from '../carpeta/carpeta'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Carpeta, FormsModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  username = '';
  mostrarInput = false;
  nombreNuevaCarpeta = '';

  pruebaCarpetas = [
    {
      name: "Examples",
      peso: "1 gb",
    },
    {
      name: "Tareas",
      peso: "50 kb",
    },
    {
      name: "El Jersa",
      peso: "50 pt"
    },
    {
      name: "El Santi",
      peso: "1 pt"
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });

  }

  logout() {
    this.router.navigate(['']);
  }

  agregarCarpeta() {
    this.mostrarInput = true;
  }

  crearCarpeta() {

    if (this.nombreNuevaCarpeta.trim() !== '') {

      this.pruebaCarpetas.push({
        name: this.nombreNuevaCarpeta,
        peso: "0 kb"
      });

      this.nombreNuevaCarpeta = '';
      this.mostrarInput = false;
    }

  }

  cancelar() {
    this.nombreNuevaCarpeta = '';
    this.mostrarInput = false;
  }

}
