import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Details } from 'src/app/Details';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  name!: String
  stream!: String
  @Output() addStud: EventEmitter<Details> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  const newDetails ={
    name: this.name,
    stream: this.stream,
    present: true
  }
  this.addStud.emit(newDetails);
}

}
