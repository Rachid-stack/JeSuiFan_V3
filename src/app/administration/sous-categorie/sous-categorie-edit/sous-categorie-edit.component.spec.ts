import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieEditComponent } from './sous-categorie-edit.component';

describe('SousCategorieEditComponent', () => {
  let component: SousCategorieEditComponent;
  let fixture: ComponentFixture<SousCategorieEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousCategorieEditComponent]
    });
    fixture = TestBed.createComponent(SousCategorieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
