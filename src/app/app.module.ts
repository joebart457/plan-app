import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import {TreeTableModule} from 'primeng/treetable';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {SpinnerModule} from 'primeng/spinner';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { EditTagComponent } from './tag-list/edit-tag/edit-tag.component';

import { TagService } from './shared/services/tag.service';
import { FileService } from './shared/services/file.service';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { PlanListComponent } from './plan-view/plan-list/plan-list.component';
import { PlanAddComponent } from './plan-view/plan-add/plan-add.component';
import { ObjectiveListComponent } from './objective-list/objective-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    NavigationComponent,
    TagListComponent,
    EditTagComponent,
    PlanViewComponent,
    PlanListComponent,
    PlanAddComponent,
    ObjectiveListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    TreeTableModule,
    PanelModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    DialogModule,
    SpinnerModule,
  ],
  providers: [
    TagService,
    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
