import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ComidasComponent } from './pages/comidas/comidas'; 
import { PostresComponent } from './pages/postres/postres'; 
import { BebidasComponent } from './pages/bebidas/bebidas'; 
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comidas', component: ComidasComponent },
  { path: 'postres', component: PostresComponent }, 
  { path: 'bebidas', component: BebidasComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];