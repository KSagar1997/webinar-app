import { Component } from '@angular/core';
import {LiveWebinarsComponent} from '../../../../shared/live-webinars/live-webinars.component';
import { UpcomingWebinarsComponent } from '../../../../shared/upcoming-webinars/upcoming-webinars.component';
import { ContinueWatchingComponent } from '../../../../shared/continue-watching/continue-watching.component';
import { WebinarsCardiologyComponent } from '../../../../shared/webinars-cardiology/webinars-cardiology.component';
import { TopSpeakersComponent } from '../../../../shared/top-speakers/top-speakers.component';
import { BrowseByTopicComponent } from '../../../../shared/browse-by-topic/browse-by-topic.component';
import { WebinarsYouMayLikeComponent } from '../../../../shared/webinars-you-may-like/webinars-you-may-like.component';
import { WebinarFooterTabsComponent } from '../../../../shared/webinar-footer-tabs/webinar-footer-tabs.component';


@Component({
  selector: 'app-webinar-list',
  imports: [LiveWebinarsComponent, UpcomingWebinarsComponent, ContinueWatchingComponent, WebinarsCardiologyComponent, TopSpeakersComponent, BrowseByTopicComponent, WebinarsYouMayLikeComponent, WebinarFooterTabsComponent],
  templateUrl: './webinar-list.component.html',
  styleUrl: './webinar-list.component.scss'
})
export class WebinarListComponent {

}
