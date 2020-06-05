import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public Tags: any = {
    DateTypes: {
        list: [
            {label: 'Occurs Once', value: 'Occurs Once'},
            {label: 'Occurs Daily', value: 'Occurs Daily'},
            {label: 'Occurs Weekly', value: 'Occurs Weekly'},
            {label: 'Occurs Bi-Monthly', value: 'Occurs Bi-Monthly'},
            {label: 'Occurs Monthly', value: 'Occurs Monthly'},
            {label: 'Occurs Bi-Annually', value: 'Occurs Bi-Annually'},
            {label: 'Occurs Annually', value: 'Occurs Annually'},
        ],
        labels: {
            Once: {label: 'Occurs Once', value: 'Occurs Once'},
            Daily: {label: 'Occurs Daily', value: 'Occurs Daily'},
            Weekly: {label: 'Occurs Weekly', value: 'Occurs Weekly'},
            BiMonthly: {label: 'Occurs Bi-Monthly', value: 'Occurs Bi-Monthly'},
            Monthly: {label: 'Occurs Monthly', value: 'Occurs Monthly'},
            BiAnnually: {label: 'Occurs Bi-Annually', value: 'Occurs Bi-Annually'},
            Annually: {label: 'Occurs Annually', value: 'Occurs Annually'},
        },
        analysis: {
            Day: {label: 'Day', value: 'Date'},
            Month: {label: 'Month', value: 'Month'},
            FullYear: {label: 'FullYear', value: 'FullYear'},
        }
    },
    MultiModes: {
      list: [
        {label: 'Split Evenly', value: 'Split Evenly'},
        {label: 'Add to All', value: 'Add to All'},
        {label: 'Percentage', value: 'Percentage'},
        {label: 'Set Value for Each', value: 'Set Value for Each'},
      ],
      labels: {
        SplitEvenly: {label: 'Split Evenly', value: 'Split Evenly'},
        AddToAll:{label: 'Add to All', value: 'Add to All'},
        Percentage: {label: 'Percentage', value: 'Percentage'},
        SetValue: {label: 'Set Value for Each', value: 'Set Value for Each'},
      },
    }
  };

  public Links: any = {
    list: [
        {label: 'Use Source Date', value: 'Source'},
        {label: 'Use Goal Date', value: 'Objective'},
        {label: 'Custom', value: 'Custom'},
    ],
    labels: {
        Source: {label: 'Use Source Date', value: 'Source'},
        Objective: {label: 'Use Goal Date', value: 'Objective'},
        Custom: {label: 'Custom', value: 'Custom'},
    }
  };

  constructor() { }
  
}
