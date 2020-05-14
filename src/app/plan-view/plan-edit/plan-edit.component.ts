import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Plan } from 'src/app/shared/plan';
import { PlanService } from 'src/app/shared/services/plan.service';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.scss']
})
export class PlanEditComponent implements OnInit {
  public plan: Plan;
  @Input() showDialog: boolean = false;
  @Input('planSelection') set planSelection(value: Plan) {
    this.plan = value;
    if (this.plan) {
      this.name = this.plan.name;
      this.filepath = this.plan.filepath;
      this.startDate = this.plan.startDate;
      this.endDate = this.plan.endDate;
      this.startDateChanged = false;
      this.endDateChanged = false;
    }
  }
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  public name: string = '';
  public filepath: string = '';
  public startDate: any;
  public endDate: Date;
  public errorMessage: string = 'Error';

  public startDateChanged: boolean = false;
  public endDateChanged: boolean = false;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }

  inputValid(): boolean {
    if (this.startDate && this.endDate && this.name !== ''){
      return true;
    }
    return false;
  }

  savePlan(): void {
    if (this.plan) {
      console.log('StartDate');
      console.log(this.startDate);
      this.plan.name = this.name;
      this.plan.startDate = new Date(this.startDate);
      if (this.startDateChanged){
        this.plan.startDate.setDate(this.plan.startDate.getDate() + 1);
      }
      this.plan.endDate = new Date(this.endDate);
      if (this.endDateChanged) {
        this.plan.endDate.setDate(this.plan.endDate.getDate() + 1);
      }
      this.save.emit(true);
      this.hideDialog();
    }
  }

  hideDialog(): void {
    this.showDialog = false;
    this.hide.emit(false);
  }
}
