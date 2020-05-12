import { Objective } from './objective';

export class Tag {
    id: number = -1;
    isExpense: boolean = true;
    amount: number = 0;
    topId: number = 0;
    parentId: number = 0;
    name: string = 'New Tag';
    date: Date[] = [new Date(), undefined];
    objectives: Objective[] = [];
    constructor(
        amount: number,
        name: string) {
            this.amount = amount;
            this.name = name;
        }
}
