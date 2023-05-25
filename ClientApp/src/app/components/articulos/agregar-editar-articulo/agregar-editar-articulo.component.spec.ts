import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarArticuloComponent } from './agregar-editar-articulo.component';

describe('AgregarEditarArticuloComponent', () => {
  let component: AgregarEditarArticuloComponent;
  let fixture: ComponentFixture<AgregarEditarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
