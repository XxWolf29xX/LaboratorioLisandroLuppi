import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default pagesRoutes;
