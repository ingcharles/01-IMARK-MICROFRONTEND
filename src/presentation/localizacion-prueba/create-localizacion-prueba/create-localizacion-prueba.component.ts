import { CommonModule, DatePipe } from '@angular/common';
import { Component, Output, OnInit, PLATFORM_ID, inject, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { ActivatedRoute } from '@angular/router';
import { TooltipDirective } from '../../../data/base/directives/tooltip-directive';
import { UtilsService } from '../../../data/base/services/utils.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { LocalizacionPruebaUseCase } from '../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { IGetLocalizacionPruebaByIdViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';

// declare var bootstrap: any;
@Component({
  selector: 'app-create-localizacion-prueba',
  templateUrl: './create-localizacion-prueba.component.html',
  styleUrls: ['./create-localizacion-prueba.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipDirective,
  ],
  providers: [],
  host: {ngSkipHydration: 'true'},
})

export class CreateLocalizacionPruebaComponent implements OnInit, AfterViewInit  {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _platformId: Object = inject(PLATFORM_ID);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _utilsService: UtilsService = inject(UtilsService);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _validatorsService: ValidatorsService = inject(ValidatorsService);
  _localizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);

  public formLocalizacionPrueba!: FormGroup;
  public checkedIsLocalizacionPrueba: boolean = false;
  navigated = false;
  sub: any;
  @Output() closeLocalizacionPrueba = new EventEmitter();

  ngOnInit(): void {

    this.formLocalizacionPrueba = new FormGroup({
      idLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.max(999999999)])),
      nombreLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
      fechaLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required])),
      isLocalizacionPrueba: new FormControl(false, Validators.compose([Validators.requiredTrue, Validators.maxLength(8)])),
      enteroLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      decimalLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.min(0.01), Validators.max(999999999.99), Validators.pattern(this._validatorsService.patternTwoDecimal)])),
      descripcionLocalizacionPrueba: new FormControl(''),
      estadoLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
    });

    this.sub = this._activatedRoute.params.subscribe(params => {
      this.navigated = true;
      let id = +params['id'];
      if (id != -1) {
        this.navigated = true;
        let idLocalizacionPrueba: IGetLocalizacionPruebaByIdViewModel = { idLocalizacionPrueba: id };
        this._localizacionPruebaUseCase.getLocalizacionPruebaById(idLocalizacionPrueba).then(obs => {
          obs.subscribe((result) => {
            this._loaderService.display(false);
            if (result.ok) {
              this.formLocalizacionPrueba.reset(result.data);
              if (result.data?.fechaLocalizacionPrueba != null) {
                var datePipe = new DatePipe('en-US');
                this.formLocalizacionPrueba.get('fechaLocalizacionPrueba')?.setValue(datePipe.transform(result.data?.fechaLocalizacionPrueba, 'yyyy-MM-dd'));
              }
            } else {
              this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
            }
          });
        });
      };
    });
  };
  ngAfterViewInit() {
    this._utilsService.showTooltip(this._platformId);
  }

  saveLocalizacionPrueba(): void {
    if (this.formLocalizacionPrueba.invalid) {
      this.formLocalizacionPrueba.markAllAsTouched();
      this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
      return;
    }

    this.formLocalizacionPrueba.get('fechaLocalizacionPrueba')?.setValue(new Date(this.formLocalizacionPrueba.value.fechaLocalizacionPrueba).toISOString());

    if (this.currentLocalizacionPrueba.idLocalizacionPrueba) {
      this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
        this._localizacionPruebaUseCase.updateLocalizacionPrueba(this.currentLocalizacionPrueba as IUpdateLocalizacionPruebaViewModel).then(obs => {
          this._loaderService.display(true);
          obs.subscribe((result) => {
            this._loaderService.display(false);
            if (result.ok) {
              this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
            } else {
              this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
            }
          });
        });
      });
      return;
    };

    this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
      this._localizacionPruebaUseCase.saveLocalizacionPrueba(this.currentLocalizacionPrueba as ISaveLocalizacionPruebaViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {
          this._loaderService.display(false);
          if (result.ok) {
            this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
            this.formLocalizacionPrueba.get('idLocalizacionPrueba')!.patchValue(result.data?.idLocalizacionPrueba);
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
        });
      });
    });
  };

  public cancelLocalizacionPrueba(): void {
    this.closeLocalizacionPrueba.emit(true);
    window.history.back();
  };

  public onChangeIsLocalizacionPrueba(event: any): void {
    this.checkedIsLocalizacionPrueba = event.target.checked;
  };

  private get currentLocalizacionPrueba(): IUpdateLocalizacionPruebaViewModel {
    return this.formLocalizacionPrueba.value as IUpdateLocalizacionPruebaViewModel;
  };

}
