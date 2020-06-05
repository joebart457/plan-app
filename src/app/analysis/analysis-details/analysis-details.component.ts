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

  getMultiModeString(rowData: any): string {
    if (rowData.multiMode === 'Percentage') {
      return `${rowData.multiModeValue}%`;
    } else if (rowData.multiMode === 'Set Value for Each') {
      return `$${rowData.multiModeValue}`;
    } else {
      return rowData.multiModeValue;
    }
  }
}
