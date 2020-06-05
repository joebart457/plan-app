import { Component, OnInit } from '@angular/core';
import { Objective } from '../shared/objective';
import { SessionService } from '../shared/services/session.service';
import { Plan } from '../shared/plan';
import { WindowHelperService } from '../shared/services/window-helper.service';

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
  public selectedObjective: Objective;
  public errorMessage: string = '';
  public plan: Plan;
  public color: string = '';
  constructor(private sessionService: SessionService, private windowHelperService: WindowHelperService) { }

  ngOnInit(): void {
    this.plan = this.sessionService.getCurrentPlan();
    this.refreshObjectivesList();
  }

  refreshObjectivesList(): void {
    this.objectives = this.sessionService.getObjectives();
  }
  showDialog(): void {
    this.showAddDialog = true;
    this.windowHelperService.dialogShown = true;
  }

  hideDialog(): void {
    this.showAddDialog = false;
    this.windowHelperService.dialogShown = false;
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

  handleDelete(): void {
    if (this.selectedObjective) {
      this.sessionService.deleteObjective(this.selectedObjective);
      this.refreshObjectivesList();
    }
  }
}
