import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/services/calendar.service';
import { CalendarEvent } from 'src/app/shared/calendar-event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public events: CalendarEvent[] = [];
  public testDate: Date = new Date();
  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'blue', title: 'My-Event'});
    this.events.push({color: 'green', title: 'My-Event'});
    this.events.push({color: 'yellow', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
    this.events.push({color: 'red', title: 'My-Event'});
  }

}
