import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalizacionPruebaComponent } from './create-localizacion-prueba.component';

describe('CreateLocalizacionPruebaComponent', () => {
  let component: CreateLocalizacionPruebaComponent;
  let fixture: ComponentFixture<CreateLocalizacionPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLocalizacionPruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocalizacionPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
