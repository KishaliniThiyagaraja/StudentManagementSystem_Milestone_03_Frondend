import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLectureComponent } from './staff-lecture.component';

describe('StaffLectureComponent', () => {
  let component: StaffLectureComponent;
  let fixture: ComponentFixture<StaffLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
