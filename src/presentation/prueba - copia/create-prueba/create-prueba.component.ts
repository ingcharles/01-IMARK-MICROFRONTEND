/**
* Vista create-prueba.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreatePruebaComponent
* @package presentation
* @subpackage prueba
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
import { PruebaUseCase } from '../../../domain/prueba/usesCases/prueba.usecase';
import { IGetPruebaByIdViewModel, ISavePruebaViewModel, IUpdatePruebaViewModel } from '../../../domain/prueba/viewModels/i-prueba.viewModel';
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
	selector: 'create-prueba-page',
	templateUrl: './create-prueba.component.html',
	styleUrls: ['./create-prueba.component.scss'],
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
		FloatLabelModule

	],
	providers: [],
	host: { ngSkipHydration: 'true' }
})

export class CreatePruebaComponent implements OnInit {

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
	_pruebaUseCase: PruebaUseCase = inject(PruebaUseCase);

	public title = 'Formulario Prueba';

	public formPrueba!: FormGroup;
	navigated = false;
	sub: any;
	options = [
		{ name: 'Item 1', id: 1 },
		{ name: 'Item 2', id: 2 },
		{ name: 'Item 2', id: 3 }
	];
	@Output() closePrueba = new EventEmitter();


	ngOnInit(): void {

		this._utilsService.showTooltip(this._platformId);

		this.formPrueba = new FormGroup({
			id: new FormControl(null, [Validators.max(999999999)]),
			nombre: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let id: IGetPruebaByIdViewModel = { id: idParametro };
				this._pruebaUseCase.getPruebaById(id).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formPrueba.reset(result.data);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	};

	savePrueba(): void {
		if (this.formPrueba.invalid) {
			this.formPrueba.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}
		const currentPrueba: any = this.currentPrueba;

		if (this.currentPrueba.id) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._pruebaUseCase.updatePrueba(currentPrueba as IUpdatePruebaViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl('index-prueba');
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		};

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._pruebaUseCase.savePrueba(currentPrueba as ISavePruebaViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formPrueba.get('id')!.patchValue(result.data?.id);
						this._router.navigateByUrl('index-prueba');
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	};

	public cancelPrueba(): void {
		this.closePrueba.emit(true);
		this._location.back();
	};

	private get currentPrueba(): IUpdatePruebaViewModel {
		return this.formPrueba.value as IUpdatePruebaViewModel;
	};

}
