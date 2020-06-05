import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { ObjectiveListComponent } from './objective-list/objective-list.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'plan', component: PlanViewComponent},
  {path: 'tag-list', component: TagListComponent},
  {path: 'objective', component: ObjectiveListComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'calendar', component: CalendarViewComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
