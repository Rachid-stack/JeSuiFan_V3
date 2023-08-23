import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAddComponent } from './categorie-add.component';

describe('CategorieAddComponent', () => {
  let component: CategorieAddComponent;
  let fixture: ComponentFixture<CategorieAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieAddComponent]
    });
    fixture = TestBed.createComponent(CategorieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
