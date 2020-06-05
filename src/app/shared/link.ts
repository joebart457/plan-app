import { Objective } from './objective';
import { Source } from './source';

export class Link {
    source: Source;
    objectives: Objective[] = [];
    multiMode: string = 'Add to All';

    spanStartType: string = 'Source';
    spanStart: Date;
    spanEndType: string = 'Source';
    spanEnd: Date;
}
