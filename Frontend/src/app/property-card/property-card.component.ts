import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent  {

   // create an object
  property: any = {
    "Id": 1 ,
    "Type":"HOUSE" ,
    "Price":12000

}
}
