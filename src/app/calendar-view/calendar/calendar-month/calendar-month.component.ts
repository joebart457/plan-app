import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { Plan } from 'src/app/shared/plan';
import { CalendarService } from 'src/app/shared/services/calendar.service';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit, OnDestroy {

  @Input() month: number = 0;
  public monthList: any = [];
  public plan: Plan;
  constructor(private sessionService: SessionService, private calendarService: CalendarService) { 
    this.monthList = this.calendarService.getMonthView(2020, this.month);
  }

  ngOnInit(): void {
    this.plan = this.sessionService.getCurrentPlan();
    this.sessionService.planSwitched.subscribe(x => {
      this.plan = this.sessionService.getCurrentPlan();
    });
  }

  ngOnDestroy(): void {
    //this.sessionService.planSwitched.unsubscribe();
  }

  getEvents(day: Date): any {
    return [{color: 'red', title: 'My-Event'},{color: 'green', title: 'My-Event'}, {color: 'purple', title: 'My-Event'}];
  }

  getMonthName(): void {
    return this.calendarService.getMonthName(this.month);
  }
}
