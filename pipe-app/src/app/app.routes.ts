import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'basic',
    title:'Pipies Basicos',
    loadComponent: () => import('./pages/basic-page/basic-page')
  },
  {
    path:'numbers',
    title:'Numbers Pipe',
    loadComponent: () => import('./pages/numbers-page/numbers-page')
  },
  {
    path:'uncommon',
    title:'Pipies no tan comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page')
  },
  {
    path:'custom',
    title:'Pipies perzonalizados',
    loadComponent: () => import('./pages/custom-page/custom-page')
  },
  {
    path:'**',
    redirectTo:'basic'
  }

];
export default routes
