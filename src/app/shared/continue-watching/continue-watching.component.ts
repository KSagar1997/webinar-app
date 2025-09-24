import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from '../../shared/lazy-img.directive';


interface Upcoming {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  credits?: string;
  remaningTime?: string;      
  subtitleIcon: string,
  duration?: string;
  expiresIn?: string;
  progress?: number;
}

@Component({
  selector: 'app-continue-watching',
  imports: [CommonModule, LazyImgDirective],
  templateUrl: './continue-watching.component.html',
  styleUrl: './continue-watching.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinueWatchingComponent {

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
      title: 'New Perspectives in The Covid19 Management',
      subtitle: 'by Dr. A. Sharma',
      image: 'assets/webinarAssets/image8.png',
      credits: '1',
      remaningTime: '10 min left',
      duration: '24:50',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      expiresIn: '',
      progress: 10
      
    },
    {
      id: 'u1',
      title: 'New Perspectives in The Covid19 Management',
      subtitle: 'by Dr. A. Sharma',
      image: 'assets/webinarAssets/image8.png',
      credits: '1',
      remaningTime: '10 min left',
      duration: '24:50',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      expiresIn: '',
      progress: 35
    },
    {
      id: 'u1',
      title: 'New Perspectives in The Covid19 Management',
      subtitle: 'by Dr. A. Sharma',
      image: 'assets/webinarAssets/image8.png',
      credits: '1',
      remaningTime: '10 min left',
      duration: '24:50',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      expiresIn: '(Expiring in 23h 30m)',
      progress: 60

    },
    {
      id: 'u1',
      title: 'New Perspectives in The Covid19 Management',
      subtitle: 'by Dr. A. Sharma',
      image: 'assets/webinarAssets/image8.png',
      credits: '1',
      remaningTime: '10 min left',
      duration: '24:50',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      expiresIn: '',
      progress: 80

    },
    {
      id: 'u1',
      title: 'New Perspectives in The Covid19 Management',
      subtitle: 'by Dr. A. Sharma',
      image: 'assets/webinarAssets/image8.png',
      credits: '1',
      remaningTime: '10 min left',
      duration: '24:50',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      expiresIn: '',
      progress: 80

    }
  ];

  showAll = false;

  get moreThanThree(): boolean {
    return this.upcoming && this.upcoming.length > 4;
  }

  toggleShowAll() {
    if (this.isMediumScreen) return;

    this.showAll = !this.showAll;
    if (!this.showAll) {
      const el = document.querySelector('.upcoming-webinars');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
