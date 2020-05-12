import { Injectable } from '@angular/core';
import { Plan } from '../plan';
import { FileService } from './file.service';
import { writeFileSync } from 'fs';
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private fileService: FileService) { 
  }

  getAvailablePlans(): Plan[] {
    let plans = [];
    const fileNames = this.fileService.readDirectory('./plans');
    if (Array.isArray(fileNames)){
      fileNames.forEach( file => {
        if (file) {
          let plan = this.fileService.getFileAsObject(file);
          if (plan){
            plans.push(plan);
          }
        }
      });
      return plans;
    } else {
      return [];
    }
  }

  savePlan(plan: Plan): boolean {
    if (plan.filepath) {
      return this.fileService.writeFile('./'+plan.filepath, JSON.stringify(plan));
    }else {
      return false;
    }
  }

}
