import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { TableViewComponent } from './component/table-view/table-view.component';
import { HeaderComponent } from './component/header/header.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {EmployeeService} from "./service/employee.service";
import {HttpModule} from "@angular/http";
import {TableRowService} from "./service/table-row.service";
import {DropdownModule} from 'primeng/primeng';
import { AboutEmployeeComponent } from './component/about-employee/about-employee.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CalendarModule} from 'primeng/primeng';
import {TimeAtWorkService} from "./service/time-at-work.service";
import {SliderModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    HeaderComponent,
    AboutEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    SliderModule,
    OrderListModule
  ],
  providers: [
    EmployeeService,
    TableRowService,
    TimeAtWorkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
