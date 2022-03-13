import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLowtohighComponent } from './filter-lowtohigh.component';

describe('FilterLowtohighComponent', () => {
  let component: FilterLowtohighComponent;
  let fixture: ComponentFixture<FilterLowtohighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterLowtohighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLowtohighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
