import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/Components/manager/courses/courseedit/courseedit.component.spec.ts
import { CourseeditComponent } from './courseedit.component';

describe('CourseeditComponent', () => {
  let component: CourseeditComponent;
  let fixture: ComponentFixture<CourseeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseeditComponent);
========
import { ViewLectureComponent } from './view-lecture.component';

describe('ViewLectureComponent', () => {
  let component: ViewLectureComponent;
  let fixture: ComponentFixture<ViewLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLectureComponent);
>>>>>>>> 3c8b0c3db0a0f8d919dccb36f3192bc956722943:src/app/Components/lecture/view-lecture/view-lecture.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
