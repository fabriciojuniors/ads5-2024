import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pagina1',
    loadComponent: () => import('./pages/pagina1/pagina1.page').then( m => m.Pagina1Page)
  },
  {
    path: 'pagina2/:numero',
    loadComponent: () => import('./pages/pagina2/pagina2.page').then( m => m.Pagina2Page),
    data: {
      titulo: 'Minha página'
    }
  },
];