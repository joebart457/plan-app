import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PlanService } from '../shared/services/plan.service';
import { Plan } from '../shared/plan';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss']
})
export class PlanSelectorComponent implements OnInit {

  public availablePlans: SelectItem[] = [];
  public selected: Plan;
  constructor(private planService: PlanService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.refreshOptions();
  }

  onSelectionChange() {
    if (this.selected){
      this.sessionService.setCurrentPlan(this.selected);
    }
  }

  refreshOptions(): void {
    this.availablePlans = this.planService.getAvailablePlansAsSelectItem();
  }
}
