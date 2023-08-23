import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurListingComponent } from './utilisateur-listing.component';

describe('UtilisateurListingComponent', () => {
  let component: UtilisateurListingComponent;
  let fixture: ComponentFixture<UtilisateurListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurListingComponent]
    });
    fixture = TestBed.createComponent(UtilisateurListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
