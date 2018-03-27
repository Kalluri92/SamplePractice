import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() childMessage: string;
  msg;
  childToParentMsg;
  constructor() { }
  ngOnInit() {
  this.msg = this.childMessage;
  this.childToParentMsg = 'Got Intialized';
  }
}
