import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/shared/tag';
import { Objective } from 'src/app/shared/objective';
import { SessionService } from 'src/app/shared/services/session.service';
import { SelectItem } from 'primeng/api/selectitem';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {

  public tag: Tag;
  @Input('tagSelection') set tagSelection(value: Tag) {
    this.tag = value;
    if (this.tag) {
      this.name = this.tag.name;
      this.amount = this.tag.amount;
      this.startDate = new Date(this.tag.startDate);
      this.endDate = new Date(this.tag.endDate);
      this.eventInterval = this.tag.eventInterval;
      this.objectives = this.tag.objectives;
      this.multiMode = this.tag.multiMode;
      this.startDateChanged = false;
      this.endDateChanged = false;
    }
  }
  @Input() showDialog: boolean = false;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  public name: string;
  public amount: number;
  public startDate: Date;
  public endDate: Date;
  public eventInterval: string;
  public objectives: Objective[] = [];
  public multiMode: string;
  public objectivesList: Objective[] = [];
  public eventIntervals: SelectItem[] = [];
  public multiModeOptions: SelectItem[] = [];
  public errorMessage: string = 'Error';

  public startDateChanged: boolean = false;
  public endDateChanged: boolean = false;

  constructor(private sessionService: SessionService, private constantsService: ConstantsService) { }

  ngOnInit(): void {
    this.objectivesList = this.sessionService.getObjectives();
    this.eventIntervals = this.constantsService.Tags.DateTypes.list;
    this.multiModeOptions = this.constantsService.Tags.MultiModes.list;
  }

  inputValid(): boolean {
    if (this.startDate && this.endDate && this.eventInterval !== ''){
      let plan = this.sessionService.getCurrentPlan()
      if (plan) {
        return true;
      }
      this.errorMessage = 'Plan is null.';
      return false;
    }
    this.errorMessage = 'All fields required';
    return false;
  }

  saveTag(): void {
    if (this.tag) {
      this.tag.name = this.name;
      this.tag.amount = this.amount;
      this.tag.eventInterval = this.eventInterval;
      this.tag.startDate = new Date(this.startDate);
      if (this.startDateChanged) {
        this.tag.startDate.setDate(this.tag.startDate.getDate() + 1);
      }
      this.tag.endDate = new Date(this.tag.endDate);
      if (this.endDateChanged) {
        this.tag.endDate.setDate(this.tag.endDate.getDate() + 1);
      }
      this.tag.objectives = this.objectives;
      this.tag.multiMode = this.multiMode;
      this.sessionService.saveTag(this.tag);
      this.save.emit(true);
      this.hideDialog();
    } else {
      console.error('Unable to save tag. Tag was null.');
    }
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
