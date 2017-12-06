import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-spa-service',
  templateUrl: './spa-service.component.html',
  styleUrls: ['./spa-service.component.css']
})
export class SpaServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

services = {
	id:1,
	name:"medical"
}
isTrue = true;

day = new Date(2017,12,5);
defaultServices = ["Medical","Bus","IT"];

newService ="";

addService = function(){

	if(this.newService != ""){
	this.defaultServices.push(this.newService);
	this.newService = "";
	}
}

removeService = function (index){

   this.defaultServices.splice(index,1);
}


}
