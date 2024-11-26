import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
