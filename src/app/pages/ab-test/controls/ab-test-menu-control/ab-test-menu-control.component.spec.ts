import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTestMenuControlComponent } from './ab-test-menu-control.component';

describe('AbTestMenuControlComponent', () => {
  let component: AbTestMenuControlComponent;
  let fixture: ComponentFixture<AbTestMenuControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbTestMenuControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbTestMenuControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
