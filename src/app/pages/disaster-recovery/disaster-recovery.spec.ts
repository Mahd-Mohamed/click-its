import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterRecovery } from './disaster-recovery';

describe('DisasterRecovery', () => {
  let component: DisasterRecovery;
  let fixture: ComponentFixture<DisasterRecovery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisasterRecovery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisasterRecovery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
