/**
* Routing prueba-uno.routing.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    Routes
* @package presentation
* @subpackage prueba-uno
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPruebaUnoComponent } from './index-prueba-uno/index-prueba-uno.component';
import { CreatePruebaUnoComponent } from './create-prueba-uno/create-prueba-uno.component';

const routes: Routes = [
	{
	path: '', component: IndexPruebaUnoComponent
	},
	{
	path: ':id', component: CreatePruebaUnoComponent
	},
	{
	path: '**',
	redirectTo: ''
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(routes)
	],
	exports: [
	RouterModule
	]
})

export class PruebaUnoRouting { }
