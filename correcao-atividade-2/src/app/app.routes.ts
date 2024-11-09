import { Routes } from '@angular/router';

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
    path: 'contato',
    loadComponent: () => import('./paginas/informacoes-contato/informacoes-contato.page').then( m => m.InformacoesContatoPage)
  },
  {
    path: 'alunos',
    loadComponent: () => import('./paginas/alunos/alunos.page').then( m => m.AlunosPage)
  },
];
