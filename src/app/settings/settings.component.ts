import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../shared/services/calendar.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    //console.log(this.calendarService.getYearTable(2020));
    console.log(this.calendarService.getMonthView(2020, 3));
  }

  openDevTools(): void {

  }
}
