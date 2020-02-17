import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  user: string;
  userlist: any = [];



  //forms
  managerform = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    private manager: ListsService,
  ) { }







  ngOnInit() { }



  submit(event) {
    // this.user = 'Mahaveer';
    this.manager.addmanger(this.managerform.value.manager);
    // for (let i = 0; i < this.userlist.length; i++) {
    //   console.log(this.userlist[i].value.name);
    // }
    // console.log(this.managerform.value.username)
  }
  edit() {

  }
}