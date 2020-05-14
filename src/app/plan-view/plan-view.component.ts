import { Component, OnInit } from '@angular/core';
import { Plan } from '../shared/plan';

@Component({
  selector: 'app-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.scss']
})
export class PlanViewComponent implements OnInit {

  public newPlan: boolean = false;
  public selectedPlan: Plan = null;
  constructor() { }

  ngOnInit(): void {
  }
}
