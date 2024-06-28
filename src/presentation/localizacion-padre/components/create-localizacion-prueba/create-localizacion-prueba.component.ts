import { CommonModule } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TooltipDirective } from '../../../../data/base/directives/tooltip-directive';
import { UtilService } from '../../../../data/base/services/utils.service';
import { LocalizacionPruebaUseCase } from '../../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaViewModel } from '../../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';
import { LoaderService } from '../../../../data/base/services/loader.service';
import { AlertsService } from '../../../../data/base/services/alerts.service';
import { messages } from '../../../../data/base/constants/messages';

// declare var bootstrap: any;
@Component({
  selector: 'app-create-localizacion-prueba',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatGridListModule,
    // HttpClientModule,
    TooltipDirective,
  ],
  providers: [],
  templateUrl: './create-localizacion-prueba.component.html',
  styleUrl: './create-localizacion-prueba.component.scss'
})

export class CreateLocalizacionPruebaComponent implements OnInit {

  constructor() { }

  _platformId: Object = inject(PLATFORM_ID);
  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _utilsService: UtilService = inject(UtilService);
  _alertsService: AlertsService = inject(AlertsService);
  _LocalizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);

  formLocalizacionPrueba!: FormGroup;
  public checkedIsLocalizacionPrueba: boolean = false;

  ngOnInit(): void {
    this.formLocalizacionPrueba = this._fb.group({
      idLocalizacionPrueba: [null],
      estadoLocalizacionPrueba: [null, Validators.required],
      nombreLocalizacionPrueba: ['', Validators.required],
      fechaLocalizacionPrueba: ['', Validators.required],
      isLocalizacionPrueba: [false, Validators.required],
      enteroLocalizacionPrueba: [null, Validators.required],
      decimalLocalizacionPrueba: [null, Validators.required],
      descripcionLocalizacionPrueba: ['', Validators.required]
    });

    this._utilsService.showTooltip(this._platformId);

  }


  guardar(): void {

    if (this.formLocalizacionPrueba.invalid) {
      this.formLocalizacionPrueba.markAllAsTouched();
      this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
      return;
    }

    this.formLocalizacionPrueba.get('fechaLocalizacionPrueba')?.setValue(new Date(this.formLocalizacionPrueba.value.fechaLocalizacionPrueba).toISOString());//2024-06-26T00:00:00.000Z

    if (this.currentLocalizacionPrueba.idLocalizacionPrueba) {
      this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
        this._LocalizacionPruebaUseCase.updateLocalizacionPrueba(this.currentLocalizacionPrueba as IUpdateLocalizacionPruebaViewModel).then(obs => {
          this._loaderService.display(true);
          obs.subscribe((result) => {
            this._loaderService.display(false);
            if (result.ok) {
              this._alertsService.alertMessage(messages.successTitle, result.message, messages.isSuccess);
              //this.formLocalizacionPrueba.get('idLocalizacionPrueba')!.patchValue(result.data?.idLocalizacionPrueba);
            } else {
              this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
            }
          });
        });
      });
      return;
    };

    this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
      this._LocalizacionPruebaUseCase.saveLocalizacionPrueba(this.currentLocalizacionPrueba as ISaveLocalizacionPruebaViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {
          this._loaderService.display(false);
          if (result.ok) {
            this._alertsService.alertMessage(messages.successTitle, result.message, messages.isSuccess);
            this.formLocalizacionPrueba.get('idLocalizacionPrueba')!.patchValue(result.data?.idLocalizacionPrueba);
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
        });
      });
    });



  }

  private get currentLocalizacionPrueba(): IUpdateLocalizacionPruebaViewModel {
    return this.formLocalizacionPrueba.value as IUpdateLocalizacionPruebaViewModel;
  };

  public onChangeIsLocalizacionPrueba(event: any): void {
    console.log("onChangeIsLocalizacionPrueba",event)
    this.checkedIsLocalizacionPrueba = event.target.checked;
  }


}
