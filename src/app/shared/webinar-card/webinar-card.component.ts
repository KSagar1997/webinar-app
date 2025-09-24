import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.scss'
})
export class WebinarCardComponent {
  @Input() image = 'assets/images/cards/placeholder.jpg';
  @Input() credits = '2';
  @Input() title = 'Webinar title';
  @Input() subtitle = 'by Author';
  @Input() time = '24:50';
}
