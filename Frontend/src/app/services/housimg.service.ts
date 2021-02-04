import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class HousimgService {
constructor(private http:HttpClient) { }

//create a new method :
getAllProperties(){
  return this.http.get('data/properties.json');

}

}
