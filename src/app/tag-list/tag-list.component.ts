import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { FileService } from '../shared/services/file.service';
import { Tag } from '../shared/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {


  public tags: TreeNode[] = [];
  public selectedTag: Tag;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.readDirectory('./savings-plans');
    this.tags.push(
      {
        "data":{
            "name":"Pictures",
            "size":"150kb",
            "type":"Folder"
        },
        "children":[
            {
                "data":{
                    "name":"barcelona.jpg",
                    "size":"90kb",
                    "type":"Picture"
                }
            },
            {
                "data":{
                    "name":"primeui.png",
                    "size":"30kb",
                    "type":"Picture"
                }
            },
            {
                "data":{
                    "name":"optimus.jpg",
                    "size":"30kb",
                    "type":"Picture"
                }
            }
        ]
    }
    );
    this.tags.push(
      {
        "data":{
            "name":"Pictures",
            "size":"150kb",
            "type":"Folder"
        },
        "children":[
            {
                "data":{
                    "name":"barcelona.jpg",
                    "size":"90kb",
                    "type":"Picture"
                }
            },
            {
                "data":{
                    "name":"primeui.png",
                    "size":"30kb",
                    "type":"Picture"
                }
            },
            {
                "data":{
                    "name":"optimus.jpg",
                    "size":"30kb",
                    "type":"Picture"
                }
            }
        ]
    }
    );
    
  }

  addTag() {
    this.selectedTag = new Tag(0, 'My Tag')
  }

}
