import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-carpeta',
  imports: [],
  standalone: true,
  templateUrl: './carpeta.html',
  styleUrl: './carpeta.css',
})
export class Carpeta {
  @Input() nombre = "Carpeta"
  @Input() peso = "0 kb"
}