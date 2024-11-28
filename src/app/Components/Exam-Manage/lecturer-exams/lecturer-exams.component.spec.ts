import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerExamsComponent } from './lecturer-exams.component';

describe('LecturerExamsComponent', () => {
  let component: LecturerExamsComponent;
  let fixture: ComponentFixture<LecturerExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturerExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
