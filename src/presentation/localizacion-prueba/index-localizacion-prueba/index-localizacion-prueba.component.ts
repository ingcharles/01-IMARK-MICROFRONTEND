import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { LocalizacionPruebaUseCase } from '../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { IGetLocalizacionPruebaPaginadoViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';

@Component({
  selector: 'index-localizacion-prueba-page',
  templateUrl: './index-localizacion-prueba.component.html',
  styleUrls: ['./index-localizacion-prueba.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class IndexLocalizacionPruebaComponent implements OnInit {
  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _localizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);


  public page: number = 0;
  public size: number = 10;
  public totalPages: number[] = [];
  public totalElements: number = 0;
  public numberOfElements: number = 0;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public titulo: string = 'Listado LocalizacionPrueba';
  public filterForm!: FormGroup;
  public localizacionPrueba: any[] = [];

  ngOnInit(): void {
    this.filterForm = this._fb.group({
      busqueda: ['']
    });
    this.loadData();
  }

  loadData(): void {
    const filters = this.filterForm.value;
    const currentLocalizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel = { page: this.page, size: this.size, search: filters.busqueda }
    this._localizacionPruebaUseCase.getLocalizacionPruebaPaginado(currentLocalizacionPrueba).then(obs => {
      this._loaderService.display(true);
      obs.subscribe((result: any) => {
        this._loaderService.display(false);
        if (result.ok) {
          this.localizacionPrueba = result.data?.content!;
          this.totalPages = Array(result.data?.totalPages).fill(0).map((x, i) => i + 1);
          this.totalElements = result.data?.totalElements;
          this.numberOfElements = result.data?.numberOfElements;
        } else {
          this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
        }
      });
    });
  }

  obtenerLocalizacionPrueba(page: number): void {
    this.page = page;
    this.loadData();
  }

  changePageSize(event: any): void {
    this.size = event.target.value;
    this.page = 0;
    this.loadData();
  }
}
