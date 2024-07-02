/**
* Vista create-localizacion-prueba.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreateLocalizacionPruebaComponent
* @package presentation
* @subpackage localizacion-prueba
*/

import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { TooltipDirective } from '../../../data/base/directives/tooltip-directive';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { LocalizacionPruebaUseCase } from '../../../domain/localizacion-prueba/usesCases/localizacion-prueba.usecase';
import { IGetLocalizacionPruebaByIdViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';

@Component({
  selector: 'create-localizacion-prueba-page',
  templateUrl: './create-localizacion-prueba.component.html',
  styleUrls: ['./create-localizacion-prueba.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipDirective,
  ],
  providers: [],
  host: { ngSkipHydration: 'true' }
})

export class CreateLocalizacionPruebaComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _platformId: Object = inject(PLATFORM_ID);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _router: Router = inject(Router);
  _location: Location = inject(Location);
  _utilsService: UtilsService = inject(UtilsService);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _validatorsService: ValidatorsService = inject(ValidatorsService);
  _localizacionPruebaUseCase: LocalizacionPruebaUseCase = inject(LocalizacionPruebaUseCase);

  public title = 'Formulario LocalizacionPrueba';

  public formLocalizacionPrueba!: FormGroup;
  public checkedIsLocalizacionPrueba: boolean = false;
  navigated = false;
  sub: any;
  @Output() closeLocalizacionPrueba = new EventEmitter();


  ngOnInit(): void {

    this._utilsService.showTooltip(this._platformId);

    this.formLocalizacionPrueba = new FormGroup({
      idLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.max(999999999)])),
      nombreLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
      isLocalizacionPrueba: new FormControl(false, Validators.compose([Validators.requiredTrue, Validators.maxLength(8)])),
      enteroLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      decimalLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.min(0.01), Validators.max(999999999.99), Validators.pattern(this._validatorsService.patternTwoDecimal)])),
      descripcionLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(250)])),
      fechaLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
      estadoLocalizacionPrueba: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
    });

    this.sub = this._activatedRoute.params.subscribe(params => {
      this.navigated = true;
      const id = params['id'];
      if (id != undefined) {
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

  saveLocalizacionPrueba(): void {
    if (this.formLocalizacionPrueba.invalid) {
      this.formLocalizacionPrueba.markAllAsTouched();
      this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
      return;
    }
    const currentLocalizacionPrueba: any = this.currentLocalizacionPrueba;
    currentLocalizacionPrueba.fechaLocalizacionPrueba = new Date(this.formLocalizacionPrueba.value.fechaLocalizacionPrueba).toISOString();

    if (this.currentLocalizacionPrueba.idLocalizacionPrueba) {
      this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
        this._localizacionPruebaUseCase.updateLocalizacionPrueba(currentLocalizacionPrueba as IUpdateLocalizacionPruebaViewModel).then(obs => {
          this._loaderService.display(true);
          obs.subscribe((result) => {
            this._loaderService.display(false);
            if (result.ok) {
              this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
              this._router.navigateByUrl('index-localizacion-prueba');
            } else {
              this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
            }
          });
        });
      });
      return;
    };

    this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
      this._localizacionPruebaUseCase.saveLocalizacionPrueba(currentLocalizacionPrueba as ISaveLocalizacionPruebaViewModel).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result) => {
          this._loaderService.display(false);
          if (result.ok) {
            this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
            this.formLocalizacionPrueba.get('idLocalizacionPrueba')!.patchValue(result.data?.idLocalizacionPrueba);
            this._router.navigateByUrl('index-localizacion-prueba');
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
        });
      });
    });
  };

  public cancelLocalizacionPrueba(): void {
    this.closeLocalizacionPrueba.emit(true);
    this._location.back();
  };

  public onChangeIsLocalizacionPrueba(event: any): void {
    this.checkedIsLocalizacionPrueba = event.target.checked;
  };

  private get currentLocalizacionPrueba(): IUpdateLocalizacionPruebaViewModel {
    return this.formLocalizacionPrueba.value as IUpdateLocalizacionPruebaViewModel;
  };

}
