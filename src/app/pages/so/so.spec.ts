import { ComponentFixture, TestBed } from '@angular/core/testing';

import { So } from './so';

describe('So', () => {
  let component: So;
  let fixture: ComponentFixture<So>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [So]
    })
    .compileComponents();

    fixture = TestBed.createComponent(So);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
