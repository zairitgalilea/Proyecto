import { Injectable, signal, WritableSignal } from '@angular/core';
import { Receta } from '../interfaces/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private _recetas: WritableSignal<Receta[]> = signal([]);
  public recetas = this._recetas.asReadonly();

  constructor() { }
}