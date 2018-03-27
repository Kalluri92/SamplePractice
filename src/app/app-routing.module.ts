import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fileShare',
    loadChildren: 'app/file-share/file-share.module#FileShareModule'
  },
  {
    path: 'directory',
    loadChildren: 'app/directory/directory.module#DirectoryModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
