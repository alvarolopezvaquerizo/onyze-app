import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadboardPassengerInfoComponent } from './headboard-passenger-info.component';

describe('HeadboardPassengerInfoComponent', () => {
  let component: HeadboardPassengerInfoComponent;
  let fixture: ComponentFixture<HeadboardPassengerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadboardPassengerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadboardPassengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
