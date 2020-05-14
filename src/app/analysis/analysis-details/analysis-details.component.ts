import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit {

  @Input() resultDetails: any;
  @Input() objectiveInfo: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getAmountPerOccurrence(rowData: any): number {
    return rowData.totalAmount/ (rowData.recurrent.length? rowData.recurrent.length: 1);
  }
}
