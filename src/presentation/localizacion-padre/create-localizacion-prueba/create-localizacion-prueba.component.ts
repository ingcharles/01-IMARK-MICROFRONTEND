import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-create-localizacion-prueba',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './create-localizacion-prueba.component.html',
  styleUrl: './create-localizacion-prueba.component.scss'
})
export class CreateLocalizacionPruebaComponent implements OnInit {
  //privat reaonly localizacionPrueba = injection()
  form!: FormGroup;
  // , private datosService: DatosService
  constructor(private fb: FormBuilder) { }

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
  }

  guardar(): void {
    if (this.form.valid) {
      // this.datosService.guardarDatos(this.form.value).subscribe(result => {
      //   console.log('Datos guardados', result);
      // }, error => {
      //   console.error('Error al guardar datos', error);
      // });
    }
  }
}
