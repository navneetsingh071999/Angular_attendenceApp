import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Details } from "../../Details"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  info: Details[]; 
  num!: number 
  res!: number
  abs!: number
  constructor() {
    const localItem = localStorage.getItem("info");
    if(localItem === null){
      this.info =[]
    }else{
      this.info = JSON.parse(localItem);
    }

   }

  ngOnInit(): void {
  }

  deleteStudent(i: Details){
    const index = this.info.indexOf(i);
    this.info.splice(index,1);
    localStorage.setItem("info", JSON.stringify(this.info));
  }

  addStudents(details: Details){

    this.info.push(details);
    localStorage.setItem("info", JSON.stringify(this.info));

  }

  tglStudAtn(details: Details){
    const index = this.info.indexOf(details);
    this.info[index].present = !this.info[index].present;
    localStorage.setItem("info", JSON.stringify(this.info));
  }

  totalpresent(){
    var x = 0, y = 0;
    for(this.num= 0;this.num < this.info.length; this.num++){
     if(this.info[this.num].present == true){
       x = x+1;
     }
     else{
        y = y + 1
     }
    }
    this.res = x
    this.abs = y
  }

}
