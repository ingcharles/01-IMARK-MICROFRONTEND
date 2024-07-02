import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'create-localizacion-prueba', pathMatch: 'full' },
  // {path: 'create-localizacion-prueba', component: CreateLocalizacionPruebaComponent },
  {
    path: 'create-localizacion-prueba',
    loadComponent: () =>
      import('../presentation/localizacion-prueba/create-localizacion-prueba/create-localizacion-prueba.component').then(
        (c) => c.CreateLocalizacionPruebaComponent
      ),
    title: 'Dashboard'
  },
  {
    path: 'edit-localizacion-prueba/:id',
    loadComponent: () =>
      import('../presentation/localizacion-prueba/create-localizacion-prueba/create-localizacion-prueba.component').then(
        (c) => c.CreateLocalizacionPruebaComponent
      ),
    title: 'Dashboard'
  },
  {
    path: 'index-localizacion-prueba',
    loadComponent: () =>
      import('../presentation/localizacion-prueba/index-localizacion-prueba/index-localizacion-prueba.component').then(
        (c) => c.IndexLocalizacionPruebaComponent
      ),
    title: 'Dashboard'
  },
  {
    path: 'create-localizacion-prueba-uno',
    loadComponent: () =>
      import('../presentation/localizacion-prueba-uno/create-localizacion-prueba-uno/create-localizacion-prueba-uno.component').then(
        (c) => c.CreateLocalizacionPruebaUnoComponent
      ),
    title: 'Dashboard'
  },
  {
    path: 'edit-localizacion-prueba-uno/:id',
    loadComponent: () =>
      import('../presentation/localizacion-prueba-uno/create-localizacion-prueba-uno/create-localizacion-prueba-uno.component').then(
        (c) => c.CreateLocalizacionPruebaUnoComponent
      ),
    title: 'Dashboard'
  },
  {
    path: 'index-localizacion-prueba-uno',
    loadComponent: () =>
      import('../presentation/localizacion-prueba-uno/index-localizacion-prueba-uno/index-localizacion-prueba-uno.component').then(
        (c) => c.IndexLocalizacionPruebaUnoComponent
      ),
    title: 'Dashboard'
  },
];
