import { Routes } from '@angular/router';
import { CreateLocalizacionPruebaComponent } from '../presentation/localizacion-padre/create-localizacion-prueba/create-localizacion-prueba.component';

export const routes: Routes = [
  {path: '', redirectTo: '/create-localizacion-prueba', pathMatch: 'full'},
  {path: 'create-localizacion-prueba', component: CreateLocalizacionPruebaComponent },
];
