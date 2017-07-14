import {Component, NgZone, OnDestroy, OnInit} from "@angular/core";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {TableRow} from "../../model/table-row";
import {TableRowService} from "../../service/table-row.service";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit, OnDestroy {

  tableRows: TableRow[];
  randomColor = 'green';
  dateFilter: Date;
  ru: any;
  isSmallScreen = false;
  private alive: boolean;
  constructor(
    private tableRowService: TableRowService,
    private ngZone: NgZone
  ) {
    window.onresize = (e) =>
    {
      this.ngZone.run(() => {
        if(window.innerWidth < 500){
          this.isSmallScreen = true;
        }else{
          this.isSmallScreen = false;
        }
      });
    };
  }

  ngOnInit() {
    if(window.innerWidth < 500){
      this.isSmallScreen = true;
    }else{
      this.isSmallScreen = false;
    }
    this.tableRowService.getTableRows()
      .subscribe(data => {
        this.tableRows = data;
        for (let row of this.tableRows) {
          if (row.state) {
            row.textState = 'Присутствует';
          } else {
            row.textState = 'Отсутствует';
          }
        }
      });

    Observable.timer(0, 60000).subscribe(() => {
      this.tableRowService.getTableRows()
        .subscribe(data => {
          this.tableRows = data;
          for (let row of this.tableRows) {
            if (row.state) {
              row.textState = 'Присутствует';
            } else {
              row.textState = 'Отсутствует';
            }
          }
        });
    });

    this.ru = {
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
      dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мрт", "Апр", "Май", "Июнь","Июль", "Авг", "Сен", "Окт", "Ноя", "Дек" ]
    };
  }

  getBackGroundColor(state: boolean) {
    if(state){
      return 'green';
    }else{
      return 'red';
    }
  }
  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
  }
}
