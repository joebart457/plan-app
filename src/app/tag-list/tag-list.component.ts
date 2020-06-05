import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { FileService } from '../shared/services/file.service';
import { Tag } from '../shared/tag';
import { SessionService } from '../shared/services/session.service';
import { Plan } from '../shared/plan';
import { Objective } from '../shared/objective';
import { WindowHelperService } from '../shared/services/window-helper.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  public showAddTag: boolean = false;
  public showEditTag: boolean = false;
  public plan: Plan;
  public tags: Tag[] = [];
  public selectedTag: Tag;
  constructor(private sessionService: SessionService, private windowHelperService: WindowHelperService) { }

  ngOnInit(): void {
    this.refreshTags();
  }


  refreshTags() {
    this.plan = this.sessionService.getCurrentPlan();
    this.tags = this.plan.tags;
  }

  handleAdd(): void {
    this.showAddTag = true;
    this.windowHelperService.dialogShown = true;
  }

  handleEdit(): void {
    this.showEditTag = true;
    this.windowHelperService.dialogShown = true;
  }

  handleDelete(): void {
    this.sessionService.deleteTag(this.selectedTag);
    this.refreshTags();
    this.selectedTag = null;
  }

  closeAddDialog(): void {
    this.showAddTag = false;
    this.windowHelperService.dialogShown = false;
  }

  closeEditDialog(): void {
    this.showEditTag = false;
    this.windowHelperService.dialogShown = false;
  }

  onTagAdd() {
    this.refreshTags();
  }

  onTagSave() {
    this.refreshTags();
  }

  getObjectiveString(rowData: any, objective: Objective) {
    if (rowData.multiMode === 'Percentage') {
      return `${objective.name}, ${objective.multiModeValue}%`;
    } else if (rowData.multiMode === 'Set Value for Each') {
      return `${objective.name}, $${objective.multiModeValue}`;
    } else if (rowData.multiMode === 'Split Evenly') {
      return `${objective.name}, $${(rowData.amount / (rowData.objectives.length? rowData.objectives.length: 1)).toFixed(2)}`;
    } else {
      return objective.name;
    }
  }
}
