import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpContactComponent } from './lp-contact.component';

describe('LpContactComponent', () => {
  let component: LpContactComponent;
  let fixture: ComponentFixture<LpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LpContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
