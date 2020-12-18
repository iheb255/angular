import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsidebarComponent } from './configsidebar.component';

describe('ConfigsidebarComponent', () => {
  let component: ConfigsidebarComponent;
  let fixture: ComponentFixture<ConfigsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
