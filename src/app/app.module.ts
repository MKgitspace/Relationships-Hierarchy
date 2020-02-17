import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManagerComponent } from './manager/manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { ParentComponent } from './ParentchildRelation/parent/parent.component';
import { ChildComponent } from './ParentchildRelation/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ManagerComponent,
    DepartmentComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
