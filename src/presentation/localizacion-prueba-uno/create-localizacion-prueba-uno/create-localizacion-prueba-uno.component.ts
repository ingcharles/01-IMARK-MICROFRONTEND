/**
* Vista create-localizacion-prueba-uno.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreateLocalizacionPruebaUnoComponent
* @package presentation
* @subpackage localizacion-prueba-uno
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
import { LocalizacionPruebaUnoUseCase } from '../../../domain/localizacion-prueba-uno/usesCases/localizacion-prueba-uno.usecase';
import { IGetLocalizacionPruebaUnoByIdViewModel, ISaveLocalizacionPruebaUnoViewModel, IUpdateLocalizacionPruebaUnoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-localizacion-prueba-uno.viewModel';

@Component({
	selector: 'create-localizacion-prueba-uno-page',
	templateUrl: './create-localizacion-prueba-uno.component.html',
	styleUrls: ['./create-localizacion-prueba-uno.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TooltipDirective,
	],
	providers: [],
	host: {ngSkipHydration: 'true' }
})

export class CreateLocalizacionPruebaUnoComponent implements OnInit {

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
	_localizacionPruebaUnoUseCase: LocalizacionPruebaUnoUseCase = inject(LocalizacionPruebaUnoUseCase);

	public title = 'Formulario LocalizacionPruebaUno';

	public formLocalizacionPruebaUno!: FormGroup;
	navigated = false;
	sub: any;
	@Output() closeLocalizacionPruebaUno = new EventEmitter();


	ngOnInit(): void {

	this._utilsService.showTooltip(this._platformId);

	this.formLocalizacionPruebaUno = new FormGroup({
		campoSerial: new FormControl(null, Validators.compose([Validators.max(999999999)])),
		campoFechaUnicio: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
		campoFechaFin: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
		campoDescripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(250)])),
	});

	this.sub = this._activatedRoute.params.subscribe(params => {
		this.navigated = true;
		const id = params['id'];
		if (id != undefined) {
			this.navigated = true;
			let campoSerial: IGetLocalizacionPruebaUnoByIdViewModel = { campoSerial: id };
			this._localizacionPruebaUnoUseCase.getLocalizacionPruebaUnoById(campoSerial).then(obs => {
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formLocalizacionPruebaUno.reset(result.data);
						if (result.data?.campoFechaUnicio != null) {
							var datePipe = new DatePipe('en-US');
							this.formLocalizacionPruebaUno.get('campoFechaUnicio')?.setValue(datePipe.transform(result.data?.campoFechaUnicio, 'yyyy-MM-dd'));
						}
						if (result.data?.campoFechaFin != null) {
							var datePipe = new DatePipe('en-US');
							this.formLocalizacionPruebaUno.get('campoFechaFin')?.setValue(datePipe.transform(result.data?.campoFechaFin, 'yyyy-MM-dd'));
						}
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	};

	saveLocalizacionPruebaUno(): void {
		if (this.formLocalizacionPruebaUno.invalid) {
			this.formLocalizacionPruebaUno.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}
		const currentLocalizacionPruebaUno:any = this.currentLocalizacionPruebaUno;
		currentLocalizacionPruebaUno.campoFechaUnicio = new Date(this.formLocalizacionPruebaUno.value.campoFechaUnicio).toISOString();
		currentLocalizacionPruebaUno.campoFechaFin = new Date(this.formLocalizacionPruebaUno.value.campoFechaFin).toISOString();

		if (this.currentLocalizacionPruebaUno.campoSerial) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._localizacionPruebaUnoUseCase.updateLocalizacionPruebaUno(currentLocalizacionPruebaUno as IUpdateLocalizacionPruebaUnoViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
              this._router.navigateByUrl('index-localizacion-prueba-uno');
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		};

	this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
		this._localizacionPruebaUnoUseCase.saveLocalizacionPruebaUno(currentLocalizacionPruebaUno as ISaveLocalizacionPruebaUnoViewModel).then(obs => {
		this._loaderService.display(true);
		obs.subscribe((result) => {
			this._loaderService.display(false);
			if (result.ok) {
			this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
				this.formLocalizacionPruebaUno.get('campoSerial')!.patchValue(result.data?.campoSerial);
				this._router.navigateByUrl('index-localizacion-prueba-uno');
			} else {
			this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	});
	};

	public cancelLocalizacionPruebaUno(): void{
		this.closeLocalizacionPruebaUno.emit(true);
		this._location.back();
	};

	private get currentLocalizacionPruebaUno(): IUpdateLocalizacionPruebaUnoViewModel {
		return this.formLocalizacionPruebaUno.value as IUpdateLocalizacionPruebaUnoViewModel;
	};

}
