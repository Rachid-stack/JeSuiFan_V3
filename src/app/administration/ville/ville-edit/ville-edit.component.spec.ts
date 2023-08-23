import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleEditComponent } from './ville-edit.component';

describe('VilleEditComponent', () => {
  let component: VilleEditComponent;
  let fixture: ComponentFixture<VilleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleEditComponent]
    });
    fixture = TestBed.createComponent(VilleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
