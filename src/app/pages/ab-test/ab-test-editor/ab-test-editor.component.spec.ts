import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTestEditorComponent } from './ab-test-editor.component';

describe('AbTestEditorComponent', () => {
  let component: AbTestEditorComponent;
  let fixture: ComponentFixture<AbTestEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbTestEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbTestEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
