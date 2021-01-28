import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { stringify } from  'querystring';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

 public propertyId: number=0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId= Number(this.route.snapshot.params['id']);
    // hayda lligne la nghayir id bs nikbos select on next page

    this.route.params.subscribe(
      (params)=>{
        this.propertyId=params['id'];
      }
      // hol 3 ligne la nghayir id b jimle bs nikbos 3ala 1 or 2 or 3
    )
  }

  onSlelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);

  }

}
