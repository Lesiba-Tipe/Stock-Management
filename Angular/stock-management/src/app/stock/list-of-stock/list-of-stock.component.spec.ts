import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStockComponent } from './list-of-stock.component';

describe('ListOfStockComponent', () => {
  let component: ListOfStockComponent;
  let fixture: ComponentFixture<ListOfStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
