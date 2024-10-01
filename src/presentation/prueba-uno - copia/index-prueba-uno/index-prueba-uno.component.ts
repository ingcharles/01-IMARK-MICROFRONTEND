/**
* Vista index-prueba-uno.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    IndexPruebaUnoComponent
* @package presentation
* @subpackage prueba-uno
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { PruebaUnoUseCase } from '../../../domain/prueba-uno/usesCases/prueba-uno.usecase';
import { IGetPruebaUnoPaginadoViewModel } from '../../../domain/prueba-uno/viewModels/i-prueba-uno.viewModel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { PanelModule } from 'primeng/panel';

@Component({
	selector: 'index-prueba-uno-page',
	templateUrl: './index-prueba-uno.component.html',
	styleUrls: ['./index-prueba-uno.component.scss'],
	standalone: true,
	imports: [CommonModule, RouterModule, PanelModule, TableModule, TagModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ToolbarModule]
})

export class IndexPruebaUnoComponent implements OnInit {

	constructor(){ }
	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_PruebaUnoUseCase: PruebaUnoUseCase = inject(PruebaUnoUseCase);

	public page: number = 0;
	public size: number = 10;
	public totalElements: number = 0;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado PruebaUno';
	public pruebaUnoRecords: any[] = [];
	public search: string = '';
		public sortBy: string = 'idUno';
		public sortDirection: string = 'ASC';
	public loading: boolean = false;

	ngOnInit(): void {
	}

	loadData(): void {
		this.loading = true;
		const currentPruebaUno: IGetPruebaUnoPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._PruebaUnoUseCase.getPruebaUnoPaginado(currentPruebaUno).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result: any) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.pruebaUnoRecords = result.data?.content!;
					this.totalElements = result.data?.totalElements;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
				this.loading = false;
			});
		});
	}

	inputSearch(event: any): void {
		this.page = event.first / event.rows;
		this.size = event.rows
		this.loading = true;
		this.loadData();
	}

	changePage(event: any): void {
		this.size = event.target.value;
		this.page = 0;
		this.loadData();
	}

	getStatus(status: string): any {
		switch (status) {
			case 'ACTIVO':
				return 'success';
			case 'INACTIVO':
				return 'warning';
			case 'OUTOFSTOCK':
				return 'danger';
			default:
				return '';
		}
	}

	clearSearch(): void {
		this.search = '';
		this.loadData();
	}

	lazyLoadData(event: any) {
		this.page = event.first / event.rows;
		this.size = event.rows
		this.sortBy = event.sortField || 'idUno';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

}
