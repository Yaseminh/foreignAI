import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuotesComponent } from './language-info.component';

describe('ListBookComponent', () => {
  let component: ListQuotesComponent;
  let fixture: ComponentFixture<ListQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
