import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileShareRoutingModule } from './file-share-routing.module';
import { FilesListComponent } from './files-list/files-list.component';

@NgModule({
  imports: [
    CommonModule,
    FileShareRoutingModule
  ],
  declarations: [FilesListComponent]
})
export class FileShareModule { }
