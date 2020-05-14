import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { ObjectiveListComponent } from './objective-list/objective-list.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'plan', component: PlanViewComponent},
  {path: 'tag-list', component: TagListComponent},
  {path: 'objective', component: ObjectiveListComponent},
  {path: 'analysis', component: AnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
