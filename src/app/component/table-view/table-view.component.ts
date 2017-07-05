import {Component, OnInit} from "@angular/core";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {TableRow} from "../../model/table-row";
import {TableRowService} from "../../service/table-row.service";


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  employees: Employee[];
  tableRows: TableRow[];
  randomColor = 'green';

  constructor(private employeeService: EmployeeService,
              private tableRowService: TableRowService) {

  }

  ngOnInit() {
    this.employeeService.getAllEmployees()
      .subscribe(data => this.employees = data);

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
  }

  getBackGroundColor(state: boolean) {
    if(state){
      return 'green';
    }else{
      return 'red';
    }
  }

}
