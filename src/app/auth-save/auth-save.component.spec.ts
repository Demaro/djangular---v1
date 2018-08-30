import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSaveComponent } from './auth-save.component';

describe('AuthSaveComponent', () => {
  let component: AuthSaveComponent;
  let fixture: ComponentFixture<AuthSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
