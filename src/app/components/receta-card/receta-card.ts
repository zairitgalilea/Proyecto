import { Component, Input } from '@angular/core';
import { Receta } from '../../interfaces/receta';

@Component({
  selector: 'app-receta-card',
  standalone: true,
  imports: [],
  templateUrl: './receta-card.html',
  styleUrl: './receta-card.css'
})
export class RecetaCardComponent {
  @Input({ required: true }) receta!: Receta; 
}