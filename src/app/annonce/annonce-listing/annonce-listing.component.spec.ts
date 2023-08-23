import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceListingComponent } from './annonce-listing.component';

describe('AnnonceListingComponent', () => {
  let component: AnnonceListingComponent;
  let fixture: ComponentFixture<AnnonceListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceListingComponent]
    });
    fixture = TestBed.createComponent(AnnonceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
