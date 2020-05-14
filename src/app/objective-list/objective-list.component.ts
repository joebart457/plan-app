import { Component, OnInit } from '@angular/core';
import { Objective } from '../shared/objective';
import { SessionService } from '../shared/services/session.service';
import { Plan } from '../shared/plan';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrls: ['./objective-list.component.scss']
})
export class ObjectiveListComponent implements OnInit {

  public objectives: Objective[] = [];
  public showAddDialog: boolean = false;
  public objectiveName: string = '';
  public objectiveGoal: number = 0;
  public errorMessage: string = '';
  public plan: Plan;
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.plan = this.sessionService.getCurrentPlan();
    this.refreshObjectivesList();
  }

  refreshObjectivesList(): void {
    this.objectives = this.sessionService.getObjectives();
  }
  showDialog(): void {
    this.showAddDialog = true;
  }

  hideDialog(): void {
    this.showAddDialog = false;
  }

  inputValid(): boolean {
    if (this.objectives.findIndex(x => x.name === this.objectiveName) < 0) {
      if (this.objectiveName !== ''){
        return true;
      }
      this.errorMessage = 'Objective must have name';
      return false;
    } else {
      this.errorMessage = 'Name in use';
      return false;
    }
  }

  addObjective(): void {
    this.sessionService.addObjective(new Objective(this.objectiveName, this.objectiveGoal));
    this.refreshObjectivesList();
    this.hideDialog();
  }
}
