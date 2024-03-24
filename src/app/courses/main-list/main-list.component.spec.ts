import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListComponent } from './main-list.component';

describe('AddBookComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
