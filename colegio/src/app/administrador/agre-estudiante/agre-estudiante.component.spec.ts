import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreEstudianteComponent } from './agre-estudiante.component';

describe('AgreEstudianteComponent', () => {
  let component: AgreEstudianteComponent;
  let fixture: ComponentFixture<AgreEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreEstudianteComponent]
    });
    fixture = TestBed.createComponent(AgreEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
