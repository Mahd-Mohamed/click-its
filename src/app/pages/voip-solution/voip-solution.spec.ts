import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoipSolution } from './voip-solution';

describe('VoipSolution', () => {
  let component: VoipSolution;
  let fixture: ComponentFixture<VoipSolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoipSolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoipSolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
