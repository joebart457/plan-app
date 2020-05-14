import { Objective } from './objective';

export class Tag {
    amount: number = 0;
    name: string = 'New Tag';
    startDate: Date;
    endDate: Date;
    objectives: Objective[] = [];
    eventInterval: any = {label: 'Occurs Once', value: 'Occurs Once'};
    constructor(name: string, amount: number) {
        this.name = name;    
        this.amount = amount;
    }
}
