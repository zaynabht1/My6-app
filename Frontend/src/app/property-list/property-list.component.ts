import { Component, OnInit } from '@angular/core';
import { HousimgService } from '../services/housimg.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;


  constructor(private housimgService:HousimgService) { }

  ngOnInit(): void {
    this.housimgService.getAllProperties().subscribe(
      data=>{
      this.properties=data;
      console.log(data);
      })


  }

}
