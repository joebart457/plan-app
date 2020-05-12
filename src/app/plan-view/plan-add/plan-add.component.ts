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
  @Input() selectedPlan: Plan = null;
  @Input() isNew: boolean = false;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();
  public name: string = '';
  public filepath: string = '';
  public errorMessage: string = 'Error';
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }

  inputValid(): boolean {
    let plans = this.planService.getAvailablePlans();
    if (plans.findIndex(x => x.name === this.name) >= 0){
      this.errorMessage = 'Plan with name '+this.name+' already exists';
      return false;
    }
    return true;
  }

  addPlan(): void {

  }

  hideDialog(): void {
    this.showDialog = false;
    this.hide.emit(false);
  }
}
