import { Tag } from './tag';
import { Objective } from './objective';

export class Plan {
    name: string = 'My Savings Plan';
    filepath: string = '';
    tags: Tag[] = [];
    objectives: Objective[] = [];
    startDate: Date;
    endDate: Date;
    constructor(name:string) {
        this.name = name;
    }
}
