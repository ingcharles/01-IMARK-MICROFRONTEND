/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexLocalizacionPruebaComponent } from './index-localizacion-prueba.component';

describe('IndexLocalizacionPruebaComponent', () => {
  let component: IndexLocalizacionPruebaComponent;
  let fixture: ComponentFixture<IndexLocalizacionPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLocalizacionPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLocalizacionPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
