import { Injectable } from '@angular/core';
import { Plan } from '../plan';
import { Objective } from '../objective';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public plan: Plan;
  constructor() { }

  getObjectives(): Objective[] {
    if (this.plan) {
      return this.plan.objectives;
    } else {
      return [];
    }
  }

  addObjective(objective: Objective) {
    this.plan.objectives.push(objective);
  }
}
