import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Details } from 'src/app/Details';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  @Input() i!: Details;
  @Output() delStud: EventEmitter<Details> = new EventEmitter();
  @Output() tglAtten: EventEmitter<Details> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  delete(i: Details){
    this.delStud.emit(i);
  }

  attendence(i: Details){
    this.tglAtten.emit(i);
  }

}
