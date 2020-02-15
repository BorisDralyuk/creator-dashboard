import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTestMenuComponent } from './ab-test-menu.component';

describe('AbTestMenuComponent', () => {
  let component: AbTestMenuComponent;
  let fixture: ComponentFixture<AbTestMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbTestMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbTestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
