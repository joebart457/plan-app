import { Injectable, EventEmitter } from '@angular/core';
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
  public planUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
  public planSwitched: EventEmitter<boolean> = new EventEmitter<boolean>();
  private lastResults: any;
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
        this.planUpdated.emit(true);
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
        this.planUpdated.emit(true);
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
      this.planUpdated.emit(true);
    } else {
      console.error('Unable to add objective. Plan was null.');
    }
  }

  deleteObjective(objective: Objective): void {
    if (this.plan) {
      let index = this.plan.objectives.findIndex(x => x.name === objective.name && x.goal === objective.goal);
      if (index < 0) {
        console.warn('Unable to delete objective '+objective.name+'. Not found.');
      } else {
        this.plan.objectives.splice(index, 1);
        this.planService.savePlan(this.plan);
        this.planUpdated.emit(true);
      }
      this.planService.savePlan(this.plan);
    }else {
      console.error('Unable to delete objective. Plan was null.');
    }
  }

  setCurrentPlan(plan: Plan): boolean {
    console.log("Setting plan for session.");
    console.log(plan);
    if (plan) {
      if (this.plan !== plan) {
        this.lastResults = [];
      }
      this.plan = plan;
      this.planSwitched.emit(true);
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

  getLastResults(): any {
    if (this.lastResults){
      return this.lastResults;
    } else {
      return [];
    }
  }

  setLastResults(results: any): void {
    if (Array.isArray(results)) {
      this.lastResults = results;
    } else{
      console.warn('Unable to save invalid result set.');
    }
  }

}
