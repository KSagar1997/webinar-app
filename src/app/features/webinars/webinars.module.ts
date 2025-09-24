import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { LiveWebinarsComponent } from '../../shared/live-webinars/live-webinars.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebinarsRoutingModule,
    LiveWebinarsComponent
  ]
})
export class WebinarsModule { }
