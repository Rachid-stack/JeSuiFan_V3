import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleDeleteComponent } from './ville-delete.component';

describe('VilleDeleteComponent', () => {
  let component: VilleDeleteComponent;
  let fixture: ComponentFixture<VilleDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleDeleteComponent]
    });
    fixture = TestBed.createComponent(VilleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
