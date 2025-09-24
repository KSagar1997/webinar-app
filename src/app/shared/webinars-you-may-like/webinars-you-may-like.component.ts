import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyImgDirective } from '../../shared/lazy-img.directive';



interface WebinarLike {
  id: string;
  org: string;
  sponsor?: string;
  followers?: number;
  timeAgo?: string;
  image: string;
  title: string;
  credits?: string;
  expiring?: string;
  keyHeighlights?: string;
  likes?: number;
  comments?: number;
  views?: number;
  duration?: string;
}


@Component({
  selector: 'app-webinars-you-may-like',
  standalone: true,
  imports: [CommonModule, FormsModule, LazyImgDirective],
  templateUrl: './webinars-you-may-like.component.html',
  styleUrl: './webinars-you-may-like.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebinarsYouMayLikeComponent { 
  
  specialties = [
    'Acupuncture','Allergy and Immunology','Anaesthesiology',
    'Clinical Nutrition','General Practitioner','Cardiology','Dermatology'
  ];
  specialtyQuery = '';
  selectedSpecialties = new Set<string>();

  // Collapsible groups state
  collapsed = {
    topics: true,
    speakers: true,
    pharma: true
  };

  // Mock webinars feed (replace with API)
  feed: WebinarLike[] = [
    {
      id: 'f1',
      org: 'PDGI Indonesia',
      sponsor: 'Sponsored by Roche',
      followers: 2845,
      timeAgo: '30 min ago',
      image: 'assets/webinarAssets/image4.png',
      title: 'Perspectives in The Covid19 Management of Parox Health caretine',
      credits: '1.5 Credits',
      expiring: 'Expiring in 23h 30m',
      keyHeighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      duration: '24:50',
      views: 750
    },
    {
      id: 'f2',
      org: 'PDGI Indonesia',
      sponsor: 'Sponsored by Roche',
      followers: 2845,
      timeAgo: '30 min ago',
      image: 'assets/webinarAssets/image8.png',
      title: 'More Than Skin Deep: Treating Eczema and Allergy',
      credits: '2 Credits',
      expiring: ' ',
      keyHeighlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      duration: '24:50',
      views: 750
    },
    {
      id: 'f3',
      org: 'PDGI Indonesia',
      sponsor: 'Sponsored by Roche',
      followers: 2845,
      timeAgo: '30 min ago',
      image: 'assets/webinarAssets/image5.png',
      title: '101 Hal tentang PPDS Bedah Umum FKUI dan Karir Bedah Umum',
      credits: '2 Credits',
      expiring: ' ',
      keyHeighlights: 'Key updates and practical tips',
      likes: 8,
      comments: 2,
      duration: '24:50',
      views: 420
    },
    {
      id: 'f4',
      org: 'PDGI Indonesia',
      sponsor: 'Sponsored by Roche',
      followers: 2845,
      timeAgo: '30 min ago',
      image: 'assets/webinarAssets/image6.png',
      title: 'Pemeriksaan Rotavirus Pada Feses — Special Promo',
      credits: '3 Credits',
      expiring: '',
      keyHeighlights: 'Prevention and screening',
      likes: 12,
      comments: 4,
      duration: '24:50',
      views: 600
    }
  ];

  // computed filtered specialties list shown in sidebar
  get filteredSpecialties() {
    if (!this.specialtyQuery) return this.specialties;
    const q = this.specialtyQuery.toLowerCase();
    return this.specialties.filter(s => s.toLowerCase().includes(q));
  }

  toggleSpecialty(s: string) {
    if (this.selectedSpecialties.has(s)) this.selectedSpecialties.delete(s);
    else this.selectedSpecialties.add(s);
  }

  isSelected(s: string) { return this.selectedSpecialties.has(s); }

  toggleCollapse(group: 'topics'|'speakers'|'pharma') {
    this.collapsed[group] = !this.collapsed[group];
  }

  follow(org: string) {
    // placeholder (replace with API + optimistic UI)
    alert(`Followed ${org}`);
  }

  moreOptions(item: WebinarLike) {
    alert('Open item menu for: ' + item.title);
  }

  like(item: WebinarLike) {
    // naive increment (replace with API)
    item.likes = (item.likes || 0) + 1;
  }

  comment(item: WebinarLike) {
    alert('Open comments for: ' + item.title);
  }

  repost(item: WebinarLike) {
    alert('Repost: ' + item.title);
  }

  share(item: WebinarLike) {
    alert('Share: ' + item.title);
  }

  trackById(_: number, item: WebinarLike) { return item.id; }
}
