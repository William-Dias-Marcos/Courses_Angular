import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBooksComponent } from './online-books.component';

describe('OnlineBooksComponent', () => {
  let component: OnlineBooksComponent;
  let fixture: ComponentFixture<OnlineBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
