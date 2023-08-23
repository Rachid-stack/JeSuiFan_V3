import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDeleteComponent } from './annonce-delete.component';

describe('AnnonceDeleteComponent', () => {
  let component: AnnonceDeleteComponent;
  let fixture: ComponentFixture<AnnonceDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceDeleteComponent]
    });
    fixture = TestBed.createComponent(AnnonceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
