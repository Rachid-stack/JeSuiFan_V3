import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterCreditsComponent } from './acheter-credits.component';

describe('AcheterCreditsComponent', () => {
  let component: AcheterCreditsComponent;
  let fixture: ComponentFixture<AcheterCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcheterCreditsComponent]
    });
    fixture = TestBed.createComponent(AcheterCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
