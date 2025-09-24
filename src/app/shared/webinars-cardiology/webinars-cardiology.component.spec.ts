import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsCardiologyComponent } from './webinars-cardiology.component';

describe('WebinarsCardiologyComponent', () => {
  let component: WebinarsCardiologyComponent;
  let fixture: ComponentFixture<WebinarsCardiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarsCardiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarsCardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
