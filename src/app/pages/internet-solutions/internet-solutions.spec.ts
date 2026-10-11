import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetSolutions } from './internet-solutions';

describe('InternetSolutions', () => {
  let component: InternetSolutions;
  let fixture: ComponentFixture<InternetSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
