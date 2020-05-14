import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Plan } from 'src/app/shared/plan';
import { PlanService } from 'src/app/shared/services/plan.service';

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.scss']
})
export class PlanAddComponent implements OnInit {

  @Input() showDialog: boolean = false;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() add: EventEmitter<boolean> = new EventEmitter<boolean>();
  public name: string = '';
  public filepath: string = '';
  public startDate: Date;
  public endDate: Date;
  public errorMessage: string = 'Error';
  public finalCheckFailed: boolean = false;
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }

  inputValid(): boolean {
    if (this.startDate && this.endDate && this.name !== '') {
      return true;
    } else {
      this.errorMessage = 'All fields required';
      return false;
    }
  }

  finalCheck(): boolean {
    let plans = this.planService.getAvailablePlans();
    if (plans.findIndex(x => x.name === this.name) >= 0){
      this.errorMessage = 'Duplicate plan name';
      this.finalCheckFailed = true;
      return false;
    }
    this.finalCheckFailed = false;
    return true;
  }

  addPlan(): void {
    if (this.finalCheck()) {
      let plan = new Plan(this.name);
      plan.filepath = this.filepath;
      plan.startDate = new Date(this.startDate);
      plan.startDate.setDate(plan.startDate.getDate() + 1);
      plan.endDate = new Date(this.endDate);
      plan.endDate.setDate(plan.endDate.getDate() + 1);
      if (this.planService.savePlan(plan)) {
        this.add.emit(true);
        this.hideDialog();
      } else {
        alert(`Unable to save plan. File '${plan.filepath}' may be open by another process.`)
      }
    }
  }

  onNameChange() {
    let filename = this.name.replace(/[/\\?%*:'|"<>]/g, '-');
    this.filepath = filename+'.json';
  }

  hideDialog(): void {
    this.showDialog = false;
    this.hide.emit(false);
  }
}
