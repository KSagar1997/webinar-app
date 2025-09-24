import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebinarListComponent } from './components/webinar-list/webinar-list.component';


const routes: Routes = [
  { path: '', component:  WebinarListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebinarsRoutingModule { }
