import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);
    if(this.myNumber != 0) {
      console.log("O número mudou de novo!");
    }
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
