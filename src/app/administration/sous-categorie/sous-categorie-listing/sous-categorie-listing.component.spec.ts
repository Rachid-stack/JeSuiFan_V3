import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieListingComponent } from './sous-categorie-listing.component';

describe('SousCategorieListingComponent', () => {
  let component: SousCategorieListingComponent;
  let fixture: ComponentFixture<SousCategorieListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousCategorieListingComponent]
    });
    fixture = TestBed.createComponent(SousCategorieListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
