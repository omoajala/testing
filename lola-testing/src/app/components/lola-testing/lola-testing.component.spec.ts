import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolaTestingComponent } from './lola-testing.component';

describe('LolaTestingComponent', () => {
  let component: LolaTestingComponent;
  let fixture: ComponentFixture<LolaTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolaTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolaTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
