import { Objective } from './objective';

export class Tag {
    amount: number = 0;
    name: string = 'New Tag';
    startDate: Date;
    endDate: Date;
    objectives: Objective[] = [];
    eventInterval: string = 'Occurs Once'
    multiMode: string = 'Add to All';
    constructor() {}
}
