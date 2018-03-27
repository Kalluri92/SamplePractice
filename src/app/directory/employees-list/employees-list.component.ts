import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
  @ViewChild(EmployeeDetailsComponent) child;
  objectMsg;
  constructor() {
  }
  ngAfterViewInit(): void {
    alert(this.child.childToParentMsg);
  }
  ngOnInit() {
    this.objectMsg = 'Hello Object';
  }

}
