import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeePostComponent } from './employee-post/employee-post.component';

const routes: Routes = [
{path: "get", component :EmployeeListComponent},
{path: "post", component:EmployeePostComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
