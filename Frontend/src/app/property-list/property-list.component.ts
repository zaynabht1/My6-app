import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id": 1 ,
    "Type":"HOUSE" ,
    "Price":12000},
    {
      "Id": 2 ,
      "Type":"HOUSE" ,
      "Price":13000},

    {
        "Id": 3 ,
        "Type":"HOUSE" ,
        "Price":14000},
    {
          "Id": 4 ,
          "Type":"HOUSE" ,
          "Price":154000},
     {
            "Id": 5 ,
            "Type":"HOUSE" ,
            "Price":1545000}



  ]


  constructor() { }

  ngOnInit(): void {

  }

}
