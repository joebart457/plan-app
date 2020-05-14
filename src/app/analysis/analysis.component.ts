import { Component, OnInit } from '@angular/core';
import { Plan } from '../shared/plan';
import { SessionService } from '../shared/services/session.service';
import { AnalysisService } from '../shared/services/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  public plan: Plan;
  public results: any = [];
  public selectedResult: any;
  constructor(private sessionService: SessionService, private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.plan = this.sessionService.getCurrentPlan();
  }

  handleRun(): void {
    this.plan = this.sessionService.getCurrentPlan();
    if (this.plan){
      this.results = this.analysisService.analyze(this.plan);
    } else {
      alert('Please select a plan to run analytics')
    }
  }

  getRowStyles(rowData: any) {
    if (rowData.goal <= rowData.result) {
      return 'result-row-success';
    }
    return 'result-row-warn';
  }
}
