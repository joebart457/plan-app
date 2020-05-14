import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { FileService } from '../shared/services/file.service';
import { Tag } from '../shared/tag';
import { SessionService } from '../shared/services/session.service';
import { Plan } from '../shared/plan';

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
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.refreshTags();
  }


  refreshTags() {
    this.plan = this.sessionService.getCurrentPlan();
    this.tags = this.plan.tags;
  }

  handleAdd(): void {
    this.showAddTag = true;
  }

  handleEdit(): void {
    this.showEditTag = true;
  }

  handleDelete(): void {
    this.sessionService.deleteTag(this.selectedTag);
    this.refreshTags();
    this.selectedTag = null;
  }

  closeAddDialog(): void {
    this.showAddTag = false;
  }

  closeEditDialog(): void {
    this.showEditTag = false;
  }

  onTagAdd() {
    this.refreshTags();
  }

  onTagSave() {
    this.refreshTags();
  }
}
