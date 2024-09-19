import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryComponentComponent } from './list-category-component.component';

describe('ListCategoryComponentComponent', () => {
  let component: ListCategoryComponentComponent;
  let fixture: ComponentFixture<ListCategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCategoryComponentComponent]
    });
    fixture = TestBed.createComponent(ListCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
