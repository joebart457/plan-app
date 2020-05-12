import { Component, OnInit } from '@angular/core';
import { Objective } from '../shared/objective';
import { SessionService } from '../shared/services/session.service';

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
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.refreshObjectivesList();
  }

  refreshObjectivesList(): void {
    this.objectives = this.sessionService.getObjectives();
  }
  showDialog(): void {
    this.showAddDialog = true;
    console.log("event triggered");
  }

  hideDialog(): void {
    this.showAddDialog = false;
    console.log("hiding");
  }

  inputValid(): boolean {
    if (this.objectives.findIndex(x => x.name === this.objectiveName) < 0) {
      return true;
    } else {
      this.errorMessage = 'Name in use';
      return false;
    }
  }

  addObjective(): void {
    this.sessionService.addObjective(new Objective(this.objectiveName, this.objectiveGoal));
    this.refreshObjectivesList();
  }
}
