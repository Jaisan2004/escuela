import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudianteComponent } from './form-estudiante.component';

describe('FormEstudianteComponent', () => {
  let component: FormEstudianteComponent;
  let fixture: ComponentFixture<FormEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEstudianteComponent]
    });
    fixture = TestBed.createComponent(FormEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
