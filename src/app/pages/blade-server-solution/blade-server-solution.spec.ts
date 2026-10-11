import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeServerSolution } from './blade-server-solution';

describe('BladeServerSolution', () => {
  let component: BladeServerSolution;
  let fixture: ComponentFixture<BladeServerSolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladeServerSolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BladeServerSolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
