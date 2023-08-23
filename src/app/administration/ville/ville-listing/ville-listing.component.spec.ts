import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleListingComponent } from './ville-listing.component';

describe('VilleListingComponent', () => {
  let component: VilleListingComponent;
  let fixture: ComponentFixture<VilleListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleListingComponent]
    });
    fixture = TestBed.createComponent(VilleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
