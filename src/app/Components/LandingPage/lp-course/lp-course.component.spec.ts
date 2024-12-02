import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpCourseComponent } from './lp-course.component';

describe('LpCourseComponent', () => {
  let component: LpCourseComponent;
  let fixture: ComponentFixture<LpCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LpCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
