import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardcComponent } from './usercardc.component';

describe('UsercardcComponent', () => {
  let component: UsercardcComponent;
  let fixture: ComponentFixture<UsercardcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercardcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercardcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
