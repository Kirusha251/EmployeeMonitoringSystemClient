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
@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    HttpModule
  ],
  providers: [
    EmployeeService,
    TableRowService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
