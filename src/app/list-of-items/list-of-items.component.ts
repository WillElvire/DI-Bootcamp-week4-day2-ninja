import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
 
 
  items=[
  {
    check:false,
    label:"Samsung S20"
  },
  {
    check:false,
    label:"Samsung A10"
  },
  {
    check:true,
    label:"Hp m-convertible"
  },
  {
    check:false,
    label:"Imprimante VHT"
  },
  {
    check:true,
    label:" GUCCI "
  },
  {
    check:false,
    label:"Drone"
  },
  {
    check:true,
    label:"Itel Hp45"
  }
]

}
