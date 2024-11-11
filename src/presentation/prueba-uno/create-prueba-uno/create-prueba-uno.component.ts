/**
* Vista create-prueba-uno.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreatePruebaUnoComponent
* @package presentation
* @subpackage prueba-uno
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
import { PruebaUnoUseCase } from '../../../domain/prueba-uno/usesCases/prueba-uno.usecase';
import { IGetPruebaUnoByIdViewModel, ISavePruebaUnoViewModel, IUpdatePruebaUnoViewModel } from '../../../domain/prueba-uno/viewModels/i-prueba-uno.viewModel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
	selector: 'create-prueba-uno-page',
	templateUrl: './create-prueba-uno.component.html',
	styleUrls: ['./create-prueba-uno.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TooltipDirective,
		ButtonModule,
		InputTextModule,
		FieldsetModule,
		CardModule,
		InputMaskModule,
		InputSwitchModule,
		InputTextareaModule,
		TooltipModule,
		CalendarModule,
		InputNumberModule,
		DropdownModule,
		FloatLabelModule,
	],
	providers: [],
	host: { ngSkipHydration: 'true' }
})

export class CreatePruebaUnoComponent implements OnInit {

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
	_pruebaUnoUseCase: PruebaUnoUseCase = inject(PruebaUnoUseCase);

	@Output() closePruebaUno = new EventEmitter();
	public title = 'Formulario PruebaUno';
	public formPruebaUno!: FormGroup;
	public navigated = false;
	public sub: any;
	public checkedEstadoUno: boolean = false;
	public optionsItemUno = [
		{ name: 'Item 1', id: 1 },
		{ name: 'Item 2', id: 2 },
		{ name: 'Item 3', id: 3 }
	];

	ngOnInit(): void {

		this.formPruebaUno = new FormGroup({
			idUno: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nombreUno: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(128)])),
			fechaUno: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			estadoUno: new FormControl(false, Validators.compose([Validators.requiredTrue, Validators.maxLength(8)])),
			enteroUno: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			decimalUno: new FormControl(null, Validators.compose([Validators.required, Validators.min(0.01), Validators.max(999999999.99), Validators.pattern(this._validatorsService.patternTwoDecimal)])),
			itemUno: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			nombreLargoUno: new FormControl(null, Validators.compose([Validators.maxLength(500)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let idUno: IGetPruebaUnoByIdViewModel = { idUno: idParametro };
				this._pruebaUnoUseCase.getPruebaUnoById(idUno).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formPruebaUno.reset(result.data);
							if (result.data?.fechaUno != null) {
								this.formPruebaUno.get('fechaUno')?.setValue(new Date(result.data?.fechaUno));
							}
							const itemUno = this.optionsItemUno.find((item: any) => item.id == result.data?.itemUno!);
							this.formPruebaUno.get('itemUno')?.setValue(itemUno);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	}

	public savePruebaUno(): void {

		if (this.formPruebaUno.invalid) {
			this.formPruebaUno.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentPruebaUno: any = this.currentPruebaUno;
		currentPruebaUno.idUno = currentPruebaUno.idUno.id;

		if (this.currentPruebaUno.idUno) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._pruebaUnoUseCase.updatePruebaUno(currentPruebaUno as IUpdatePruebaUnoViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl('index-prueba-uno');
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._pruebaUnoUseCase.savePruebaUno(currentPruebaUno as ISavePruebaUnoViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formPruebaUno.get('idUno')!.patchValue(result.data?.idUno);
						this._router.navigateByUrl('index-prueba-uno');
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	}

	public cancelPruebaUno(): void {
		this.closePruebaUno.emit(true);
		this._location.back();
	}

	public onChangeEstadoUno(event: any): void {
		this.checkedEstadoUno = event.checked;
	}

	private get currentPruebaUno(): IUpdatePruebaUnoViewModel {
		return this.formPruebaUno.value as IUpdatePruebaUnoViewModel;
	}

}
