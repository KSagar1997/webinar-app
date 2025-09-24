import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from '../../shared/lazy-img.directive';

interface Speaker {
  id: string;
  name: string;
  specialty?: string;
  avatar: string;
  role?: string; // optional additional metadata
}

@Component({
  selector: 'app-top-speakers',
  imports: [CommonModule, LazyImgDirective],
  templateUrl: './top-speakers.component.html',
  styleUrl: './top-speakers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopSpeakersComponent {
  speakers: Speaker[] = [
    { id: 's1', name: 'Dr Chong wui', specialty: 'Gastrologist, General Phys...', avatar: 'assets/webinarAssets/User2.png' },
    { id: 's2', name: 'Dr Wuyama Guramg', specialty: 'Gastroenterologist, Surgeon', avatar: 'assets/webinarAssets/User2.png' },
    { id: 's3', name: 'Dr Wuyama Guramg', specialty: 'Gastroenterologist, Surgeon', avatar: 'assets/webinarAssets/User2.png' },
    { id: 's4', name: 'Dr Wuyama Guramg', specialty: 'Cardiologist', avatar: 'assets/webinarAssets/User2.png' },
  ];

  // trackBy for performance
  trackById(_: number, item: Speaker) {
    return item.id;
  }
}
