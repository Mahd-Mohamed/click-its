import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingSolution } from './printing-solution';

describe('PrintingSolution', () => {
  let component: PrintingSolution;
  let fixture: ComponentFixture<PrintingSolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintingSolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintingSolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
