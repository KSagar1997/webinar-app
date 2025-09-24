import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from '../../shared/lazy-img.directive';

interface Upcoming {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  credits?: string;
  startAt?: string;      
  startsIn?: string;     
  subtitleIcon: string,
  keyHeighlights: string,
  host?: string;
  duration?: string;
  expiresIn?: string;
}


@Component({
  selector: 'app-webinars-cardiology',
  imports: [CommonModule, LazyImgDirective],
  templateUrl: './webinars-cardiology.component.html',
  styleUrl: './webinars-cardiology.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebinarsCardiologyComponent {
  isMediumScreen = false;
  
  
    ngOnInit(): void {
      this.checkWindowSize();
    }
  
    
    @HostListener('window:resize')
    onResize() {
          this.checkWindowSize();
      }
  
  
  
    upcoming: Upcoming[] = [
      {
        id: 'u1',
        title: 'Emerging therapies in acute coronary syndrome',
        subtitle: 'by Dr. A. Sharma',
        image: 'assets/webinarAssets/image8.png',
        credits: '1',
        startAt: '2025-10-05T15:30:00+05:30',
        startsIn: 'Goes live on',
        duration: '45:00',
        subtitleIcon: 'assets/webinarAssets/subtitle1.png',
        keyHeighlights: 'Manage chronic and complex diseases',
        host: 'Cardio Dept',
        expiresIn: '',
        
      },
      {
        id: 'u2',
        title: 'New guidelines for antibiotic stewardship',
        subtitle: 'by Dr. N. Patel',
        image: 'assets/webinarAssets/image5.png',
        credits: '1.5',
        startAt: '2025-10-07T11:00:00+05:30',
        startsIn: 'Goes live on',
        duration: '30:00',
        subtitleIcon: 'assets/webinarAssets/subtitle1.png',
        keyHeighlights: 'Manage chronic and complex diseases',
        host: 'Infectious Diseases',
        expiresIn: '',
      },
      {
        id: 'u3',
        title: 'Pediatric airway management — practical tips',
        subtitle: 'by Dr. R. Mehra',
        image: 'assets/webinarAssets/image2.png',
        credits: '2',
        startAt: '2025-10-08T09:00:00+05:30',
        startsIn: 'Goes live on',
        duration: '40:00',
        subtitleIcon: 'assets/webinarAssets/subtitle1.png',
        keyHeighlights: 'Manage chronic and complex diseases',
        host: 'Pediatrics',
        expiresIn: '(Expiring in 23h 30m)',
      },
      {
        id: 'u4',
        title: 'Diabetes: what’s new in insulin therapy',
        subtitle: 'by Dr. S. Rao',
        image: 'assets/webinarAssets/image7.png',
        credits: '1',
        startAt: '2025-10-12T17:00:00+05:30',
        startsIn: 'Goes live on',
        duration: '50:00',
        subtitleIcon: 'assets/webinarAssets/subtitle1.png',
        keyHeighlights: 'Manage chronic and complex diseases',
        host: 'Endocrinology',
        expiresIn: '',
      }
    ];
  
    // For desktop show first 3, mobile/tablet horizontal scroll (same logic as Live)
    showAll = false;
  
    get moreThanThree(): boolean {
      return this.upcoming && this.upcoming.length > 3;
    }
  
    toggleShowAll() {
      if (this.isMediumScreen) return;
  
      this.showAll = !this.showAll;
      if (!this.showAll) {
        const el = document.querySelector('.upcoming-webinars');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  
    // placeholder notify handler
    notifyMe(item: Upcoming) {
      // wire up real subscription or API; for now simple UI feedback
      // you may replace with toast/snackbar
      alert(`You will be notified for: "${item.title}" starting at ${item.startAt}`);
    }
  
      private checkWindowSize() {
      const w = window.innerWidth;
      const wasMedium = this.isMediumScreen;
      this.isMediumScreen = w >= 576 && w <= 991.98;
  
      if (this.isMediumScreen) {
        this.showAll = false;
      }
  
      if (wasMedium && !this.isMediumScreen) {
        this.showAll = false;
      }
    }
}
