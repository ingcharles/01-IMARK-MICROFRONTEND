import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArrayToDatePipe } from '../../../../data/base/pipes/array-to-date-pipe';
import { AlertsService } from '../../../../data/base/services/alerts.service';
import { LoaderService } from '../../../../data/base/services/loader.service';
import { LocalizacionPruebaUseCase } from '../../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { IGetLocalizacionPruebaPaginadoViewModel } from '../../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';

@Component({
  selector: 'app-index-localizacion-prueba',
  templateUrl: './index-localizacion-prueba.component.html',
  styleUrls: ['./index-localizacion-prueba.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ArrayToDatePipe  ],
})
export class IndexLocalizacionPruebaComponent implements OnInit {
  // private localizacionPruebaService: LocalizacionPruebaService
  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);

  filterForm!: FormGroup;
  localizacionPruebas: any[] = [];
  page: number = 0;
  size: number = 10;
  totalPages: number[] = [];
  totalElements: number = 0;

  numberOfElements: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  //private _fb: FormBuilder


  _localizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);
  ngOnInit(): void {
    this.filterForm = this._fb.group({
      busqueda: ['']
    });
    this.loadData();
  }

  loadData(): void {
    const filters = this.filterForm.value;

    const currentLocalizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel= {page:this.page, size:this.size, search:filters.busqueda}
    console.log(currentLocalizacionPrueba)
    this._localizacionPruebaUseCase.getLocalizacionPruebaPaginado(currentLocalizacionPrueba).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((result) => {
        this._loaderService.display(false);
                this.localizacionPruebas = result.content;
        this.totalPages = Array(result.totalPages).fill(0).map((x, i) => i + 1);

      this.totalElements = result.totalElements;
        this.numberOfElements = result.numberOfElements;
        // if (result.ok) {

        //   this._alertsService.alertMessage(messages.successTitle, result.message, messages.isSuccess);
        // } else {
        //   this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
        });
      });

      // this.localizacionPruebaService.getLocalizacionPruebas(this.page, this.size, filters).subscribe(response => {
      //   this.localizacionPruebas = response.content;
      //   this.totalPages = Array(response.totalPages).fill(0).map((x, i) => i + 1);
      // });
      // this.totalElements = response.totalElements;
      //   this.currentElements = response.numberOfElements;

      // this.localizacionPruebas = [{nombreLocalizacionPrueba: 'a',
      //   fechaLocalizacionPrueba: '2024-12-14',
      //   estadoLocalizacionPrueba: 'a'
      // }];
      // this.totalPages = [1,2]
      // this.totalElements = 20;
      //   this.currentElements = 10;
    }

  onSubmit(): void {
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
