import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieListingComponent } from './categorie-listing.component';

describe('CategorieListingComponent', () => {
  let component: CategorieListingComponent;
  let fixture: ComponentFixture<CategorieListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieListingComponent]
    });
    fixture = TestBed.createComponent(CategorieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
