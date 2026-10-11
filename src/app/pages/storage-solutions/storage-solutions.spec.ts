import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageSolutions } from './storage-solutions';

describe('StorageSolutions', () => {
  let component: StorageSolutions;
  let fixture: ComponentFixture<StorageSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
