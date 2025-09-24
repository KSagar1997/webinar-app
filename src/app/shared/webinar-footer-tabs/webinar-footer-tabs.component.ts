import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

type Tab = { id: string; label: string; targetId: string };

@Component({
  selector: 'app-webinar-footer-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webinar-footer-tabs.component.html',
  styleUrls: ['./webinar-footer-tabs.component.scss']
})
export class WebinarFooterTabsComponent implements AfterViewInit, OnDestroy {
  tabs: Tab[] = [
    { id: 'for-you', label: 'For you', targetId: 'live-webinars' },
    { id: 'live', label: 'Live', targetId: 'live-webinars' },
    { id: 'upcoming', label: 'Upcoming', targetId: 'upcoming-webinars' }
  ];

  active = this.tabs[0].id;

  private io: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    // Scroll spy: observe each target section
    const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 }; 
    // rootMargin pushes "active" when the section enters ~40% viewport top
    this.io = new IntersectionObserver((entries) => {
      // pick the entry with largest intersectionRatio or the one that isIntersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
      if (visible.length) {
        // find which tab targets this element (first matching tab)
        const id = visible[0].target.getAttribute('id');
        // if element id is our 'live-webinars' or 'upcoming-webinars' etc. map to tab
        const tab = this.tabs.find(t => t.targetId === id);
        if (tab) this.active = tab.id;
      }
    }, options);

    // Observe configured target elements (if present)
    this.tabs.forEach(t => {
      const el = document.getElementById(t.targetId);
      if (el) this.io?.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  // Smooth scroll to target element and set active
  goToTab(tab: Tab) {
    const el = document.getElementById(tab.targetId);
    if (!el) {
      // fallback: set active and return
      this.active = tab.id;
      return;
    }
    this.active = tab.id;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // on desktop, ensure tab is visible (no-op since fixed)
  }
}
