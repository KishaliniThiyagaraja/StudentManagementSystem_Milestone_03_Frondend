import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureDashboardComponent } from './lecture-dashboard.component';

describe('LectureDashboardComponent', () => {
  let component: LectureDashboardComponent;
  let fixture: ComponentFixture<LectureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LectureDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
