import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHightolowComponent } from './filter-hightolow.component';

describe('FilterHightolowComponent', () => {
  let component: FilterHightolowComponent;
  let fixture: ComponentFixture<FilterHightolowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterHightolowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHightolowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
