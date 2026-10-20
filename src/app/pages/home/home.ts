import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private router = inject(Router);

  // Simulador de sesión (apagado por ahora)
  sesionIniciada = false;

  verCategoria(ruta: string) {
    if (this.sesionIniciada) {
      this.router.navigate([ruta]);
    } else {
      this.router.navigate(['/login']); 
    }
  }
}