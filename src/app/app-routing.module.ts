import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DepartmentComponent } from './department/department.component';
import { ManagerComponent } from './manager/manager.component';
import { ParentComponent } from './ParentchildRelation/parent/parent.component';
import { ChildComponent } from './ParentchildRelation/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
