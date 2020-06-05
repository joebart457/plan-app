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
import {DropdownModule} from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ColorPickerModule} from 'primeng/colorpicker';

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
import { PlanEditComponent } from './plan-view/plan-edit/plan-edit.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { AddTagComponent } from './tag-list/add-tag/add-tag.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AnalysisDetailsComponent } from './analysis/analysis-details/analysis-details.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CalendarComponent } from './calendar-view/calendar/calendar.component';
import { CalendarDayComponent } from './calendar-view/calendar/calendar-day/calendar-day.component';
import { CalendarMonthComponent } from './calendar-view/calendar/calendar-month/calendar-month.component';
import { SourceListComponent } from './source-list/source-list.component';


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
    ObjectiveListComponent,
    PlanEditComponent,
    AnalysisComponent,
    PlanSelectorComponent,
    AddTagComponent,
    LandingPageComponent,
    AnalysisDetailsComponent,
    SettingsComponent,
    CalendarViewComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarMonthComponent,
    SourceListComponent
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
    DropdownModule,
    RadioButtonModule,
    ScrollPanelModule,
    TooltipModule,
    OverlayPanelModule,
    ColorPickerModule,
  ],
  providers: [
    TagService,
    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
