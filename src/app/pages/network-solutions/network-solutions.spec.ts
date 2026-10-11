import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSolutions } from './network-solutions';

describe('NetworkSolutions', () => {
  let component: NetworkSolutions;
  let fixture: ComponentFixture<NetworkSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
