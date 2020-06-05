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
  public previousResults: any = [];
  constructor(private sessionService: SessionService, private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.plan = this.sessionService.getCurrentPlan();
    this.previousResults = this.sessionService.getLastResults();
    this.results = this.previousResults;
  }

  handleRun(): void {
    this.plan = this.sessionService.getCurrentPlan();
    if (this.plan){
      this.results = this.analysisService.analyze(this.plan);
      this.sessionService.setLastResults(this.results.map(x => x));
      this.previousResults = this.sessionService.getLastResults();
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
