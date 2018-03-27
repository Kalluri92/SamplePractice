import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { CustomDirectivesModule } from '../custom-directives/custom-directives.module';

import { DirectoryRoutingModule } from './directory-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    CustomPipesModule,
    CustomDirectivesModule
  ],
  declarations: [EmployeesListComponent, EmployeeDetailsComponent]
})
export class DirectoryModule { }
