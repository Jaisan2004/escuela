import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreProfesorComponent } from './agre-profesor.component';

describe('AgreProfesorComponent', () => {
  let component: AgreProfesorComponent;
  let fixture: ComponentFixture<AgreProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreProfesorComponent]
    });
    fixture = TestBed.createComponent(AgreProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
