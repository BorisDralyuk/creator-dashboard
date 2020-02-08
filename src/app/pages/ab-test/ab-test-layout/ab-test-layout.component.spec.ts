import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTestLayoutComponent } from './ab-test-layout.component';

describe('AbTestLayoutComponent', () => {
  let component: AbTestLayoutComponent;
  let fixture: ComponentFixture<AbTestLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbTestLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbTestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
