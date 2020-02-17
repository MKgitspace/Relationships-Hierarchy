import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
list :any [];
  constructor() { }

addmanger(user)
{
  console.log(user);
  this.list.push(user);
  console.log(this.list)
}

}
