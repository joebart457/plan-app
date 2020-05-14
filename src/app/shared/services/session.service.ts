import { Injectable } from '@angular/core';
import { Plan } from '../plan';
import { Objective } from '../objective';
import { PlanService } from './plan.service';
import { WindowHelperService } from './window-helper.service';
import { Tag } from '../tag';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public plan: Plan;
  constructor(
      private planService: PlanService,
      private windowHelperService: WindowHelperService
    ) { }

  save(): void {
    if (this.plan) {
      this.planService.savePlan(this.plan);
    }else {
      console.warn('Unable to save plan. Plan was null.');
    }
  }

  saveTag(tag: Tag): void {
    if (this.plan) {
      let index = this.plan.tags.findIndex(x => tag.name === x.name);
      if (index < 0){
        console.warn('Unable to save tag. Tag not found.');
      } else {
        this.plan.tags[index] = tag;
        this.planService.savePlan(this.plan);
      }
    }else {
      console.warn('Unable to save tag. Plan was null.');
    }
  }

  getTags(): Tag[] {
      if (this.plan) {
        return this.plan.tags;
      } else {
        return [];
      }
    }

  addTag(tag: Tag): void {
      if (this.plan) {
        console.log('Saving tag: ');
        console.log(tag);
        this.plan.tags.push(tag);
        this.planService.savePlan(this.plan);
      }else {
        console.error('Unable to add tag. Plan was null.');
      }
  }

  deleteTag(tag: Tag) {
    if (this.plan) {
      let index = this.plan.tags.findIndex(x => x === tag);
      if (index > -1) {
        this.plan.tags.splice(index, 1);
        this.planService.savePlan(this.plan);
      } else {
        console.warn('Tag '+tag.name+' not found during delete operation.');
      }
    }else {
      console.error('Unable to delete tag. Plan was null.');
    }
  }
  
  getObjectives(): Objective[] {
    if (this.plan) {
      return this.plan.objectives.map(x=>x);
    } else {
      return [];
    }
  }

  addObjective(objective: Objective): void {
    if (this.plan) {
      this.plan.objectives.push(objective);
      this.planService.savePlan(this.plan);
    }else {
      console.error('Unable to add objective. Plan was null.');
    }
  }

  setCurrentPlan(plan: Plan): boolean {
    console.log("Setting plan for session.");
    console.log(plan);
    if (plan) {
      this.plan = plan;
      this.windowHelperService.setWindowTitle(plan.name);
      return true;
    }
    return false;
  }

  getCurrentPlan(): Plan {
    if (this.plan) {
      return this.plan;
    }
    return null;
  }

}
