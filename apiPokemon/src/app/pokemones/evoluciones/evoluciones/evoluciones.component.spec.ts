import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionesComponent } from './evoluciones.component';

describe('EvolucionesComponent', () => {
  let component: EvolucionesComponent;
  let fixture: ComponentFixture<EvolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
