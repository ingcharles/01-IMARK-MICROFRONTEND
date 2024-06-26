import { Routes } from '@angular/router';
// import { CreateLocalizacionPruebaComponent } from '../presentation/localizacion-padre/create-localizacion-prueba/create-localizacion-prueba.component';

export const routes: Routes = [
  {path: '', redirectTo: 'create-localizacion-prueba', pathMatch: 'full'},
  // {path: 'create-localizacion-prueba', component: CreateLocalizacionPruebaComponent },
  {
    path: 'create-localizacion-prueba',
    loadComponent: () =>
      import('../presentation/localizacion-padre/components/create-localizacion-prueba/create-localizacion-prueba.component').then(
        (c) => c.CreateLocalizacionPruebaComponent
      ),
      title: 'Dashboard'
  },
];
