import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpAboutUsComponent } from './lp-about-us.component';

describe('LpAboutUsComponent', () => {
  let component: LpAboutUsComponent;
  let fixture: ComponentFixture<LpAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LpAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
