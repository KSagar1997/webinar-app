import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarFooterTabsComponent } from './webinar-footer-tabs.component';

describe('WebinarFooterTabsComponent', () => {
  let component: WebinarFooterTabsComponent;
  let fixture: ComponentFixture<WebinarFooterTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarFooterTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarFooterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
