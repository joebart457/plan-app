import { Injectable } from '@angular/core';
import { Plan } from '../plan';
import { FileService } from './file.service';
import { writeFileSync } from 'fs';
import { SelectItem } from 'primeng/api/selectitem';
import { WindowHelperService } from './window-helper.service';
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private fileService: FileService, private windowHelperService: WindowHelperService) { 
  }

  getAvailablePlans(): Plan[] {
    let plans = [];
    let localDir = this.windowHelperService.getAppDir();
    console.log('Reading directory: '+localDir+'\\plans');
    const fileNames = this.fileService.readDirectory(localDir+'\\plans');
    console.log(fileNames);
    if (Array.isArray(fileNames)){
      console.log('Discovered files:');
      console.log(fileNames);
      fileNames.forEach( file => {
        if (file) {
          let plan = this.fileService.getFileAsObject(localDir+'\\plans\\'+file);
          if (plan){
            plan.startDate = new Date(plan.startDate);
            plan.endDate = new Date(plan.endDate);
            plan.tags.map(tag => {
              tag.startDate = new Date(tag.startDate);
              tag.endDate = new Date(tag.endDate);
            });
            plans.push(plan);
          }
        }
      });
      console.log('Plans are: ');
      console.log(plans);
      return plans;
    } else {
      return [];
    }
  }
  getAvailablePlansAsSelectItem(): SelectItem[] {
    let planItems = [];
    let plans = this.getAvailablePlans();
    plans.forEach(plan => {
      planItems.push({"label": plan.name, "value": plan});
    });
    return planItems;
  }

  savePlan(plan: Plan): boolean {
    if (plan.filepath) {
      let localDir = this.windowHelperService.getAppDir();
      return this.fileService.writeFile(localDir+'\\plans\\'+plan.filepath, JSON.stringify(plan));
    }else {
      return false;
    }
  }

}
