import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppSpaComponent } from './my-app-spa.component';

describe('MyAppSpaComponent', () => {
  let component: MyAppSpaComponent;
  let fixture: ComponentFixture<MyAppSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
