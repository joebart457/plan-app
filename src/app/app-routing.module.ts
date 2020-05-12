import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { ObjectiveListComponent } from './objective-list/objective-list.component';


const routes: Routes = [
  {path: 'plan', component: PlanViewComponent},
  {path: 'tag-list', component: TagListComponent},
  {path: 'objective', component: ObjectiveListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
