import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TooltipDirective } from '../../../../data/base/directives/tooltip-directive';
import { UtilService } from '../../../../data/base/services/util.service';
import { ILocalizacionPrueba } from '../../interfaces/ILocalizacionPrueba';

// declare var bootstrap: any;
@Component({
  selector: 'app-create-localizacion-prueba',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    TooltipDirective],
  templateUrl: './create-localizacion-prueba.component.html',
  styleUrl: './create-localizacion-prueba.component.scss'
})
export class CreateLocalizacionPruebaComponent implements OnInit {
  //privat reaonly localizacionPrueba = injection()
  form!: FormGroup;
  // , private datosService: DatosService
  constructor(private fb: FormBuilder,@Inject(PLATFORM_ID) private platformId: any) { }

  public utilService:UtilService = inject(UtilService);
  ngOnInit(): void {
    this.form = this.fb.group({
      idLocalizacionPrueba: [null, Validators.required],
      estadoLocalizacionPrueba: [null, Validators.required],
      nombreLocalizacionPrueba: ['', Validators.required],
      fechaLocalizacionPrueba: ['', Validators.required],
      isLocalizacionPrueba: [false, Validators.required],
      enteroLocalizacionPrueba: [null, Validators.required],
      decimalLocalizacionPrueba: [null, Validators.required],
      descripcionLocalizacionPrueba: ['', Validators.required],
      estadoLocalizacion: [null, Validators.required]
    });

    if (isPlatformBrowser(this.platformId)) {
      const bootstrap = (window as any).bootstrap;
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  }

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  //     tooltipTriggerList.map(function (tooltipTriggerEl) {
  //       return new bootstrap.Tooltip(tooltipTriggerEl);
  //     });
  //   }
  // }

  // ngAfterViewInit(): void {
  //   const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  //   tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new bootstrap.Tooltip(tooltipTriggerEl);
  //   });
  // }
  guardar(): void {
    if (this.form.valid) {
      const formValues: ILocalizacionPrueba = this.form.value;
      const formData: ILocalizacionPrueba = {
        idLocalizacionPrueba: formValues.idLocalizacionPrueba,
        estadoLocalizacionPrueba: formValues.estadoLocalizacionPrueba,
        nombreLocalizacionPrueba: formValues.nombreLocalizacionPrueba,
        fechaLocalizacionPrueba: new Date(formValues.fechaLocalizacionPrueba).toISOString(), // Convertimos la fecha al formato ISO
        isLocalizacionPrueba: formValues.isLocalizacionPrueba,
        enteroLocalizacionPrueba: formValues.enteroLocalizacionPrueba,
        decimalLocalizacionPrueba: formValues.decimalLocalizacionPrueba,
        descripcionLocalizacionPrueba: formValues.descripcionLocalizacionPrueba,
        estadoLocalizacion: formValues.estadoLocalizacion
      };
      console.log("formData" ,formData);


      // this.datosService.guardarDatos(this.form.value).subscribe(result => {
      //   console.log('Datos guardados', result);
      // }, error => {
      //   console.error('Error al guardar datos', error);
      // });
    }else{
      this.form.markAllAsTouched()
    }
  }

  // onSubmit(): void {
  //   if (this.localizacionForm.valid) {
  //     console.log(this.localizacionForm.value);
  //   } else {
  //     console.log('Formulario no válido');
  //   }
  // }


  // isFieldInvalid(fieldName: string): boolean {
  //   const field = this.form.get(fieldName)!;
  //   return field.invalid && (field.dirty || field.touched);
  // }

  // getFieldError(fieldName: string): string {
  //   const field = this.form.get(fieldName)!;
  //   if (field.hasError('required')) {
  //     return 'Este campo es obligatorio';
  //   }
  //   return '';
  // }

}
