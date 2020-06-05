import { Objective } from './objective';
import { Source } from './source';
import { Link } from './link';

export class Plan {
    name: string = 'My Savings Plan';
    filepath: string = '';
    sources: Source[] = [];
    links: Link[] = [];
    objectives: Objective[] = [];
    startDate: Date;
    endDate: Date;
    constructor(name:string) {
        this.name = name;
    }
}
