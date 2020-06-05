import { Injectable } from '@angular/core';
import { Plan } from '../plan';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  public monthNames: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  constructor() { }


  public getMonthView(year: number, month: number): any {
    let start = new Date(year, month, 1);
    let dayOfWeek = start.getDay();
    let end = new Date(year, month + 1, 1);
    let days = this.recurringDaysBetween(start, end, 1, 'Date');
    let results = [];
    let week = [];
    for (let i = 0; i < dayOfWeek; i ++) {
        week.push(null);
    }
    for (let i = 0; i < days.length; i ++){
      if (week.length === 7) {
        results.push(week);
        week = [];
      } else if (i+1 === days.length) {
        week.push(days[i]);
        while (week.length !== 7) {
          week.push(null);
        }
        results.push(week);
        break;
      }
      week.push(days[i]);
    }
    return results;
  }

 public getMonthName(month: number) {
   if (month >= 0 && month < 12) {
     return this.monthNames[month];
   }
   return 'N/A';
 }

  public recurringDaysBetween(startDate: Date, endDate: Date, interval: number, intervalType): Date[] {
    intervalType = intervalType || 'Date';
    var date = new Date(startDate);
    var recurrent = [];
    var setget = {set: 'set'+intervalType, get: 'get'+intervalType};
    while (date < endDate) {
      recurrent.push( new Date(date));
      date[setget.set](date[setget.get]()+interval);
    }

    return recurrent;
  }
}
