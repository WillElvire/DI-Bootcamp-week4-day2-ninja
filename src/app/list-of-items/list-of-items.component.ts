import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
 
 
  products : {check:boolean;label:string}[] = [
  {
    check:false,
    label:"Iphone 4"
  },
  {
    check:false,
    label:"LG"
  },
  {
    check:true,
    label:"Macbook pro"
  },
  {
    check:false,
    label:"Drone"
  },
]
  
  constructor(){
  }
  

}
