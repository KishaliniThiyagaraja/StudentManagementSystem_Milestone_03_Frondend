import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerAttendanceComponent } from './lecturer-attendance.component';

describe('LecturerAttendanceComponent', () => {
  let component: LecturerAttendanceComponent;
  let fixture: ComponentFixture<LecturerAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturerAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
