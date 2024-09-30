/**
* Modulo prueba-uno.module.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    NgModule
* @package presentation
* @subpackage prueba-uno
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { ValidationService } from '../base/services/validation.service';
import { IndexPruebaUnoComponent } from './index-prueba-uno/index-prueba-uno.component';
import { CreatePruebaUnoComponent } from './create-prueba-uno/create-prueba-uno.component';
import { PruebaUnoRouting } from './prueba-uno.routing';

@NgModule({
	declarations: [
	CreatePruebaUnoComponent,
	IndexPruebaUnoComponent,
	],
	imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	NgbDatepicker,
	SharedModule,
	NgbModule,
	MatSlideToggleModule,
	MatTableModule,
	MatPaginatorModule,
	MatInputModule,
	MatSortModule,
	NgxMaskDirective,
	NgxMaskPipe,
	PruebaUnoRouting
	],
	providers: [
	provideNgxMask(),
	{provide: ValidationService }
	]
})

export class PruebaUnoModule { }
