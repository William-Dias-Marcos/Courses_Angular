import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidCoursesComponent } from './paid-courses.component';

describe('PaidCoursesComponent', () => {
  let component: PaidCoursesComponent;
  let fixture: ComponentFixture<PaidCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
