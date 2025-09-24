import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from '../../shared/lazy-img.directive';


interface Webinar {
  id: string;
  title: string;
  subtitle?: string;
  subtitleIcon?: string;
  host?: string;
  image: string;
  credits?: string;
  duration?: string;
  live?: boolean;
  viewers?: string;
  expiresIn?: string;
  keyHeighlights?: string;
  
}

@Component({
  selector: 'app-live-webinars',
  imports: [CommonModule, LazyImgDirective],
  templateUrl: './live-webinars.component.html',
  styleUrl: './live-webinars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LiveWebinarsComponent {
  //  Consider an API response her JSON format
  isMediumScreen = false;


  ngOnInit(): void {
    this.checkWindowSize();
  }

  
  @HostListener('window:resize')
  onResize() {
        this.checkWindowSize();
    }



  liveWebinars: Webinar[] = [
    {
      id: 'w1',
      title: 'Controversies in Bipolar I Disorder (BP-1): implications for Asthma from',
      subtitle: 'by PDGI Indonesia',
      host: 'PDGI Indonesia',
      image: 'assets/webinarAssets/image1.png',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      credits: '2',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '',
      keyHeighlights: 'Manage chronic and complex diseases'
    },
    {
      id: 'w2',
      title: 'Virus is like any other respiratory virus that causes common',
      subtitle: 'by GSK',
      host: 'GSK',
      image: 'assets/webinarAssets/image2.png',
      subtitleIcon: 'assets/webinarAssets/subtitle2.png',
      credits: '1.5 ',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '(Expiring in 23h 30m)',
      keyHeighlights: 'Manage chronic and complex diseases'
    },
    {
      id: 'w3',
      title: 'Virus is like any other respiratory virus that causes common',
      subtitle: 'by Bayer',
      host: 'Bayer',
      image: 'assets/webinarAssets/image3.png',
      subtitleIcon: 'assets/webinarAssets/subtitle3.png',
      credits: '2',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '',
      keyHeighlights: 'Manage chronic and complex diseases'
    },
    {
      id: 'w1',
      title: 'Controversies in Bipolar I Disorder (BP-1): implications for Asthma from',
      subtitle: 'by PDGI Indonesia',
      host: 'PDGI Indonesia',
      image: 'assets/webinarAssets/image1.png',
      subtitleIcon: 'assets/webinarAssets/subtitle1.png',
      credits: '2',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '',
      keyHeighlights: 'Manage chronic and complex diseases'
    },
    {
      id: 'w2',
      title: 'Virus is like any other respiratory virus that causes common',
      subtitle: 'by GSK',
      host: 'GSK',
      image: 'assets/webinarAssets/image2.png',
      subtitleIcon: 'assets/webinarAssets/subtitle2.png',
      credits: '1.5 ',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '(Expiring in 23h 30m)',
      keyHeighlights: 'Manage chronic and complex diseases'
    },
    {
      id: 'w3',
      title: 'Virus is like any other respiratory virus that causes common',
      subtitle: 'by Bayer',
      host: 'Bayer',
      image: 'assets/webinarAssets/image3.png',
      subtitleIcon: 'assets/webinarAssets/subtitle3.png',
      credits: '2',
      duration: '24:50',
      live: true,
      viewers: '200+',
      expiresIn: '',
      keyHeighlights: 'Manage chronic and complex diseases'
    },

  ];
  showAllLive = false;

  // helper getter
  get moreThanThree(): boolean {
    return this.liveWebinars && this.liveWebinars.length > 3;
  }

  toggleShowAllLive() {
    if (this.isMediumScreen) return;


    this.showAllLive = !this.showAllLive;
    // optional: smooth scroll to top of section when collapsing on desktop
    if (!this.showAllLive) {
      const el = document.querySelector('.live-webinars');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  private checkWindowSize() {
    const w = window.innerWidth;
    const wasMedium = this.isMediumScreen;
    this.isMediumScreen = w >= 576 && w <= 991.98;

    if (this.isMediumScreen) {
      this.showAllLive = false;
    }

    if (wasMedium && !this.isMediumScreen) {
      this.showAllLive = false;
    }
  }
}
