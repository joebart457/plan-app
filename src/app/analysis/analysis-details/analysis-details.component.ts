import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit {

  @Input() resultDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
