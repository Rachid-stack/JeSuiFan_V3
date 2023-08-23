import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieDeleteComponent } from './sous-categorie-delete.component';

describe('SousCategorieDeleteComponent', () => {
  let component: SousCategorieDeleteComponent;
  let fixture: ComponentFixture<SousCategorieDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousCategorieDeleteComponent]
    });
    fixture = TestBed.createComponent(SousCategorieDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
