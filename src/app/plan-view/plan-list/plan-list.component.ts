import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanService } from 'src/app/shared/services/plan.service';
import { Plan } from 'src/app/shared/plan';
import { WindowHelperService } from 'src/app/shared/services/window-helper.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  @Output() add: EventEmitter<any> = new EventEmitter();
  public plans: Plan[] = [];
  public selectedPlan: Plan;
  public showAddPlan: boolean = false;
  public showEditPlan: boolean = false;
  constructor(private planService: PlanService, private windowHelperService: WindowHelperService) { }

  ngOnInit(): void {
    this.refreshPlans();
  }

  refreshPlans(): void {
    this.plans = this.planService.getAvailablePlans();
  }

  handleAdd(): void {
    this.showAddPlan = true;
    this.windowHelperService.dialogShown = true;
  }

  handleEdit(): void {
    this.showEditPlan = true;
    this.windowHelperService.dialogShown = true;
  }

  closeAddDialog(): void {
    this.showAddPlan = false;
    this.windowHelperService.dialogShown = false;
  }

  closeEditDialog(): void {
    this.showEditPlan = false;
    this.windowHelperService.dialogShown = false;
  }

  onAddedPlan(): void {
    let that = this;
    setTimeout( function(that: any){that.refreshPlans();}, 3000, that); 
  }

  onPlanSave(): void {
    this.planService.savePlan(this.selectedPlan);
  }
}
