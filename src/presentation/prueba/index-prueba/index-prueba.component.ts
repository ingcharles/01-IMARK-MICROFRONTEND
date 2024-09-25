/**
* Vista index-prueba.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    IndexPruebaComponent
* @package presentation
* @subpackage prueba
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { PruebaUseCase } from '../../../domain/prueba/usesCases/prueba.usecase';
import { IGetPruebaPaginadoViewModel } from '../../../domain/prueba/viewModels/i-prueba.viewModel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
	selector: 'index-prueba-page',
	templateUrl: './index-prueba.component.html',
	styleUrls: ['./index-prueba.component.scss'],
	standalone: true,
	imports: [TableModule, TagModule, ButtonModule,IconFieldModule, InputIconModule, 
		CommonModule, InputTextModule, ],
	
})
export class IndexPruebaComponent implements OnInit {
	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);

	_loaderService: LoaderService = inject(LoaderService);

	_alertsService: AlertsService = inject(AlertsService);

	 _PruebaUseCase: PruebaUseCase = inject(PruebaUseCase);

	public page: number = 0;
	public size: number = 10;
	public totalPages: number[] = [];
	public totalElements: number = 0;
	public numberOfElements: number = 0;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public titulo:string = 'Listado Prueba';
	public filterForm!: FormGroup;
	public prueba: any[] = [];

	first = 0;

    rows = 10;
	pageChange(event:any ) {
		console.log("event",event)
        this.first = event.first;
        this.rows = event.rows;
    }
	ngOnInit(): void {
		this.filterForm = this._fb.group({
			busqueda: ['']
		});
		this.loadData();
		}

	loadData(): void {
		const filters = this.filterForm.value;
		const currentPrueba: IGetPruebaPaginadoViewModel = {page: this.page, size: this.size, search: filters.busqueda }
		this._PruebaUseCase.getPruebaPaginado(currentPrueba).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result: any) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.prueba = result.data?.content!;
					this.totalPages = Array(result.data?.totalPages).fill(0).map((x, i) => i + 1);
					this.totalElements = result.data?.totalElements;
					this.numberOfElements = result.data?.numberOfElements;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	obtenerPrueba(page: number): void {
		this.page = page;
		this.loadData();
	}

	changePageSize(event: any): void {
	this.size = event.target.value;
	this.page = 0;
	this.loadData();
	}

	getSeverity(status: string):any {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}
