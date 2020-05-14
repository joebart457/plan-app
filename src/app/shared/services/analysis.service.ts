import { Injectable } from '@angular/core';
import { Plan } from '../plan';
import { ConstantsService } from './constants.service';
import { Objective } from '../objective';
import { PlanService } from './plan.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private constantsService: ConstantsService) { }

  public analyze(plan: Plan): any {
    let results = [];
    if (plan) {
      plan.objectives.forEach(objective => {
        results.push({name: objective.name, goal: objective.goal, result: 0, warn: false, details: []});
      });
      plan.tags.map(x=>x).forEach(tag => {
        let refinedStartDate: Date = tag.startDate? tag.startDate > plan.startDate? tag.startDate : plan.startDate : plan.startDate;
        let refinedEndDate: Date = tag.endDate? tag.endDate < plan.endDate? tag.endDate : plan.endDate : plan.endDate;
        let addedAmount = 0;
        let recurrent = [];
        if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.Once.value) {
          console.log("EventInterval: Once");
          if (tag.endDate > plan.startDate){
            addedAmount = tag.amount;
          }
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.Daily.value) {
          console.log('EventInterval: Daily');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 1, this.constantsService.Tags.DateTypes.analysis.Day.value, false);
          addedAmount = tag.amount * recurrent.length;
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.Weekly.value) {
          console.log('EventInterval: Weekly');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 7, this.constantsService.Tags.DateTypes.analysis.Day.value, false);
          addedAmount = tag.amount * recurrent.length;
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.BiMonthly.value) {
          console.log('EventInterval: BiMonthly');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 14, this.constantsService.Tags.DateTypes.analysis.Day.value, false);
          addedAmount = tag.amount * recurrent.length;
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.Monthly.value) {
          console.log('EventInterval: Monthly');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 1, this.constantsService.Tags.DateTypes.analysis.Month.value, false);
          addedAmount = tag.amount * recurrent.length;
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.BiAnnually.value) {
          console.log('EventInterval: BiAnnually');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 6, this.constantsService.Tags.DateTypes.analysis.Month.value, false);
          addedAmount = tag.amount * recurrent.length;
        } else if (tag.eventInterval === this.constantsService.Tags.DateTypes.labels.Annually.value) {
          console.log('EventInterval: Annually');
          recurrent = this.recurringDatesCount(refinedStartDate, refinedEndDate, 1, this.constantsService.Tags.DateTypes.analysis.FullYear.value, false);
          addedAmount = tag.amount * recurrent.length;
        }

        console.log("Added amount is "+addedAmount);
        tag.objectives.forEach( objective => {
          const objIndex = results.findIndex(x => x.name === objective.name);
          if (objIndex < -1) {
            console.log("creating new result");
            results.push({name: objective.name, goal: objective.goal, result: addedAmount, warn: true, 
              details: [{name: tag.name, amount: tag.amount, totalAmount: addedAmount, 'recurrent': recurrent, startDate: new Date(tag.startDate), endDate: new Date(tag.endDate)}]}
            );
          } else {
            console.log("adding to objective: ");
            console.log(results[objIndex]);
            results[objIndex].result += addedAmount;
            results[objIndex].details.push({name: tag.name, amount: tag.amount, totalAmount: addedAmount, 'recurrent': recurrent, startDate: new Date(tag.startDate), endDate: new Date(tag.endDate)});
          }
        });
      });
      return results;
    } else {
      console.error('Plan not specified.');
      return [];
    }
  }

  public recurringDatesCount(startDate: Date, endDate: Date, interval, intervalType, noweekends): Date[] {
    intervalType = intervalType || 'Date';
    var date = new Date(startDate);
    var recurrent = [];
    var setget = {set: 'set'+intervalType, get: 'get'+intervalType};
    while (date < endDate) {
      recurrent.push( noweekends ? noWeekend() : new Date(date) );
      date[setget.set](date[setget.get]()+interval);
    }

    // add 1 day for sunday, subtract one for saturday
    function noWeekend() {
        var add, currdate = new Date(date), day = date.getDay();
        if (~[6,0].indexOf(day)) {
          currdate.setDate(currdate.getDate() + (add = day == 6 ? -1 : 1));
        }
        return new Date(currdate);
    }
    console.log("event occured:");
    console.log(recurrent.length);
    console.log("times. On dates: ");
    console.log(recurrent);
    return recurrent;
}
}
