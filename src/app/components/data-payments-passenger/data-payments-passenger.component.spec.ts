import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPaymentsPassengerComponent } from './data-payments-passenger.component';

describe('DataPaymentsPassengerComponent', () => {
  let component: DataPaymentsPassengerComponent;
  let fixture: ComponentFixture<DataPaymentsPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPaymentsPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPaymentsPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
