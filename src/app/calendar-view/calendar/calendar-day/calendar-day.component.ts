import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CalendarEvent } from 'src/app/shared/calendar-event';
import { eventNames } from 'cluster';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit, AfterViewInit {

  @Input() date: Date; 
  @Input() events: CalendarEvent[] = [];
  public showToolTip: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


  getIndicatorStyles(calendarEvent: any): any {
    let styles: any = {
      'background-color': calendarEvent.color,
      'height': '4px',
      'width': '4px',
      //'box-shadow': '1px 1px 0px 1px blue'
    };
    return styles;
  }

  getLegendStyles(calendarEvent: any): any {
    let styles: any = {
      'background-color': calendarEvent.color,
      'height': '10px',
      'width': '10px'

    };
    return styles;
  }

}
