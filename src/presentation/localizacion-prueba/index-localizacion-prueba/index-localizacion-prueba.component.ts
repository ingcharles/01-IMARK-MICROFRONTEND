import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../../../data/base/services/loader.service';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LocalizacionPruebaUseCase } from '../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { IGetLocalizacionPruebaPaginadoViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';
import { messages } from '../../../data/base/constants/messages';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index-localizacion-prueba',
  templateUrl: './index-localizacion-prueba.component.html',
  styleUrls: ['./index-localizacion-prueba.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
})
export class IndexLocalizacionPruebaComponent implements OnInit {
  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);

  filterForm!: FormGroup;
  localizacionPrueba: any[] = [];
  page: number = 0;
  size: number = 10;
  totalPages: number[] = [];
  totalElements: number = 0;
titulo:string= "Listado LocalizacionPrueba";
  numberOfElements: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  _localizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);
  ngOnInit(): void {
    this.filterForm = this._fb.group({
      busqueda: ['']
    });
    this.loadData();
  }

  loadData(): void {
    const filters = this.filterForm.value;

    const currentLocalizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel = { page: this.page, size: this.size, search: filters.busqueda }
    console.log(currentLocalizacionPrueba)
    this._localizacionPruebaUseCase.getLocalizacionPruebaPaginado(currentLocalizacionPrueba).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((result:any) => {
        console.log("result",result.data)
        this._loaderService.display(false);
        if (result.ok) {

        this.localizacionPrueba = result.data?.content!;
        this.totalPages = Array(result.totalPages).fill(0).map((x, i) => i + 1);
        this.totalElements = result.totalElements;
        this.numberOfElements = result.numberOfElements;

          //this._alertsService.alertMessage(messages.successTitle, result.message, messages.isSuccess);
        } else {
          this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
      });
    });
;
  }

  obtenerLocalizacionPrueba(): void {
    this.page = 0; // Reset to first page on filter change
    this.loadData();
  }

  changePage(page: number): void {
    this.page = page;
    this.loadData();
  }

  changePageSize(event: any): void {
    this.size = event.target.value;
    this.page = 0; // Reset to first page when page size changes
    this.loadData();
  }
}
