import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodproductComponent } from './foodproduct.component';

describe('FoodproductComponent', () => {
  let component: FoodproductComponent;
  let fixture: ComponentFixture<FoodproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
