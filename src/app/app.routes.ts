import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'webinars', loadChildren: () => import('./features/webinars/webinars.module').then(m => m.WebinarsModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '' }
];
