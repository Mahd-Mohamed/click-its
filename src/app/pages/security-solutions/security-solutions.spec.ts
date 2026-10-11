import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySolutions } from './security-solutions';

describe('SecuritySolutions', () => {
  let component: SecuritySolutions;
  let fixture: ComponentFixture<SecuritySolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritySolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritySolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
