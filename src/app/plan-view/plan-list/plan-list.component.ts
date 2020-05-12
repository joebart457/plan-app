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
  public showAddPlan: boolean = false;
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.plans = this.planService.getAvailablePlans();
  }

  handleAdd(): void {
    this.showAddPlan = true;
  }

  handleClose(): void {
    this.showAddPlan = false;
  }
}
