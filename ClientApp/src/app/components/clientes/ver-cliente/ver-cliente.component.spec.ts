import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClienteComponent } from './ver-cliente.component';

describe('VerClienteComponent', () => {
  let component: VerClienteComponent;
  let fixture: ComponentFixture<VerClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
