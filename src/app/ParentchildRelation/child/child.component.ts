import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  parentMessage;
  count=0;
  constructor() { }
  @Output() Fromchild = new EventEmitter<any>()


  //Recived value From Parent
  childReceived(){
  console.log('Child Method Fire')
  this.parentMessage ='ParentCalled'+this.count;
  this.count++;
}




  //Child Send Message To Parent
  childFireEvent() {
    this.Fromchild.emit({name:'Mahavir',Designation:'Developer'});
  }
 
}
