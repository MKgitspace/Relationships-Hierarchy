import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage;
  i = 1;
  private childNotifiy: ChildComponent;
  constructor() { this.childNotifiy = new ChildComponent() }



  parentFireEvent() {
    this.childNotifiy.childReceived();
  }



  recevied(event) {
    console.log(event, 'djfkd  ');
    this.parentMessage = event;
    // this.parentMessage = event + this.i;
    // this.i++;
  }
  ngOnInit() {
  }

}
