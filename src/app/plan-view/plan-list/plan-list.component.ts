import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanService } from 'src/app/shared/services/plan.service';
import { Plan } from 'src/app/shared/plan';

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
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.refreshPlans();
  }

  refreshPlans(): void {
    this.plans = this.planService.getAvailablePlans();
  }

  handleAdd(): void {
    this.showAddPlan = true;
  }

  handleEdit(): void {
    this.showEditPlan = true;
  }

  closeAddDialog(): void {
    this.showAddPlan = false;
  }

  closeEditDialog(): void {
    this.showEditPlan = false;
  }

  onAddedPlan(): void {
    let that = this;
    setTimeout( function(that: any){that.refreshPlans();}, 3000, that); 
  }

  onPlanSave(): void {
    this.planService.savePlan(this.selectedPlan);
  }
}
