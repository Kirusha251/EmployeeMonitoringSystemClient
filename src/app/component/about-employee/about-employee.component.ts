import {Component, NgZone, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/employee";
import {SelectItem} from 'primeng/primeng';
import {TimeAtWorkService} from "../../service/time-at-work.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-about-employee',
  templateUrl: './about-employee.component.html',
  styleUrls: ['./about-employee.component.css']
})
export class AboutEmployeeComponent implements OnInit {
  employees: Employee[];
  dropdownContent: SelectItem[] = [];
  modDropDown: SelectItem[] = [];
  selectedMode: any;
  selectedDate: Date;
  sinceDate: Date;
  untilDate: Date;
  selectedEmployee: any;
  timeAtWork: string;
  ru: any;
  isSmallScreen = false;
  constructor(
    private employeeService: EmployeeService,
    private timeAtWorkService: TimeAtWorkService,
    private ngZone: NgZone
  ) {

  }

  ngOnInit() {
    if(window.innerWidth < 500){
      this.isSmallScreen = true;
    }else{
      this.isSmallScreen = false;
    }
    this.modDropDown.push(
      {label: 'Дата', value: {val: 0}},
      {label: 'Неделя', value: {val: 1}},
      {label: 'Месяц', value: {val: 2}},
      {label: 'Период', value: {val: 3}},
    );
    this.selectedMode = {};
    this.selectedEmployee = {};
    this.ru = {
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
      dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мрт", "Апр", "Май", "Июнь","Июль", "Авг", "Сен", "Окт", "Ноя", "Дек" ]
    };

    this.employeeService.getAllEmployees()
      .subscribe(data => {
        this.employees = data;
        this.dropdownContent = [];
        for (let employee of this.employees){
          this.dropdownContent.push({label: employee.fio, value: {fio: employee.fio}});
        }
      });

    Observable.timer(0, 60000).subscribe(() => {
      this.employeeService.getAllEmployees()
        .subscribe(data => {
          this.employees = data;
          this.dropdownContent = [];
          for (let employee of this.employees){
            this.dropdownContent.push({label: employee.fio, value: {fio: employee.fio}});
          }
        });
    });
  }


  onClick() {
    this.timeAtWorkService.getTimeAtWorkByFIO(this.selectedEmployee.fio, this.sinceDate, this.untilDate , this.selectedMode.val)
      .subscribe(data => {
        this.timeAtWork = data;
        console.log(this.timeAtWork);
      },
      error => {
        console.log('Ошибка ' + error.statusCode);
      });
  }

}
