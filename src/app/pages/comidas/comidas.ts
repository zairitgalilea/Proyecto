import { Component } from '@angular/core';

@Component({
  selector: 'app-comidas',
  standalone: true,
  imports: [],
  templateUrl: './comidas.html',
  styleUrl: './comidas.css'
})
export class ComidasComponent {
  recetas = []; 
}