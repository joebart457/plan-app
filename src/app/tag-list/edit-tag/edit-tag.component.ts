import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/shared/tag';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {

  @Input() selectedTag: Tag;
  constructor() { }

  ngOnInit(): void {
  }

  displayDate(): void {
    console.log(this.selectedTag.date);
  }
}
