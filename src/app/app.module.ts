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
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {AuthGuard} from "./guard/auth.guard";
import {AlertService} from "./service/alert.service";
import {AuthenticationService} from "./service/authentication.service";
import {UserService} from "./service/user.service";
import {RouterModule, Routes} from "@angular/router";
import { AlertComponent } from './component/alert/alert.component';
import { ContainerComponent } from './component/container/container.component';
import {RedirectGuard} from "./guard/redirect.guard";
import {DialogModule} from 'primeng/primeng';

const appRoutes: Routes = [
  { path: '', component: ContainerComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent , canActivate: [RedirectGuard]},
  { path: 'login', component: LoginComponent, canActivate: [RedirectGuard]},
  { path: '**', redirectTo: ''}
  ];
@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    HeaderComponent,
    AboutEmployeeComponent,
    LoginComponent,
    RegistrationComponent,
    AlertComponent,
    ContainerComponent
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
    OrderListModule,
    RouterModule.forRoot(appRoutes),
    DialogModule
  ],
  providers: [
    AuthGuard,
    RedirectGuard,
    EmployeeService,
    TableRowService,
    TimeAtWorkService,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
