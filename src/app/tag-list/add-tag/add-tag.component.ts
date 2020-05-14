import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/shared/tag';
import { Objective } from 'src/app/shared/objective';
import { SessionService } from 'src/app/shared/services/session.service';
import { SelectItem } from 'primeng/api/selectitem';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  @Input() showDialog: boolean = false;
  @Output() add: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  public name: string;
  public amount: number;
  public startDate: Date;
  public endDate: Date;
  public eventInterval: string;
  public objectives: Objective[] = [];
  public multiMode: string;
  public objectivesList: Objective[] = [];
  public multiModeOptions: SelectItem[] = [];
  public eventIntervals: SelectItem[] = [];

  public errorMessage: string = 'Error';

  constructor(private sessionService: SessionService, private constantsService: ConstantsService) { }

  ngOnInit(): void {
    this.objectivesList = this.sessionService.getObjectives().map(x => x);
    this.eventIntervals = this.constantsService.Tags.DateTypes.list;
    this.multiModeOptions = this.constantsService.Tags.MultiModes.list;
    this.eventInterval = this.constantsService.Tags.DateTypes.list[0].value;
    this.multiMode = this.constantsService.Tags.MultiModes.list[0].value;
  }

  inputValid(): boolean {
    if (this.startDate && this.endDate && this.eventInterval !== ''){
      let plan = this.sessionService.getCurrentPlan()
      if (plan) {
        if (plan.tags.findIndex(x => this.name === x.name) < 0){
          return true;
        } else {
          this.errorMessage = 'Duplicate tag name';
          return false;
        }
      }
      this.errorMessage = 'Plan is null.';
      return false;
    }
    this.errorMessage = 'All fields required';
    return false;
  }

  saveTag(): void {
    let tag = new Tag();
    tag.name = this.name;
    tag.amount = this.amount;
    tag.startDate = new Date(this.startDate);
    tag.startDate.setDate(tag.startDate.getDate() + 1);
    tag.endDate = new Date(this.endDate);
    tag.endDate.setDate(tag.endDate.getDate() + 1);
    tag.eventInterval = this.eventInterval;
    tag.objectives = this.objectives;
    tag.multiMode = this.multiMode;
    this.sessionService.addTag(tag);
    this.add.emit(true);
    this.hideDialog(); 
  }

  multiModeValid() {
    if (this.multiMode == 'Percentage') {
      let total = 0;
      this.objectives.forEach(objective => {
        total += objective.multiModeValue;
      });
      if (total <= 100) {
        return true;
      } else {
        this.errorMessage = 'Percentage cannot exceed 100%';
        return false;

      }
    } else if (this.multiMode == 'Set Value for Each') {
      let total = 0;
      this.objectives.forEach(objective => {
        total += objective.multiModeValue;
      });
      if (total <= this.amount) {
        return true;
      } else {
        this.errorMessage = 'Amount distributed cannot exceed total tag amount';
        return false;
      }
    } else {
      return true;
    }
  }

  hideDialog(): void {
    this.showDialog = false;
    this.hide.emit(false);
  }
}
