import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchpanelComponent } from './serchpanel.component';

describe('SerchpanelComponent', () => {
  let component: SerchpanelComponent;
  let fixture: ComponentFixture<SerchpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
