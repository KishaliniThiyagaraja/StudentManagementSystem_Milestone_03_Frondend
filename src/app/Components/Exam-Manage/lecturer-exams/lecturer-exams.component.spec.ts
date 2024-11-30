import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/Components/manager/courses/courseadd/courseadd.component.spec.ts
import { CourseaddComponent } from './courseadd.component';

describe('CourseaddComponent', () => {
  let component: CourseaddComponent;
  let fixture: ComponentFixture<CourseaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseaddComponent);
========
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
>>>>>>>> 3c8b0c3db0a0f8d919dccb36f3192bc956722943:src/app/Components/Exam-Manage/lecturer-exams/lecturer-exams.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
