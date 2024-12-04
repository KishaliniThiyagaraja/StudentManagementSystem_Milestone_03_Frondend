import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweAttendanceComponent } from './viwe-attendance.component';

describe('ViweAttendanceComponent', () => {
  let component: ViweAttendanceComponent;
  let fixture: ComponentFixture<ViweAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViweAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViweAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
