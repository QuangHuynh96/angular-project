import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  background:string = "background-color: ";
  bgColor:string = "background-color: white";

  constructor() { }

  checkChoice(color:string) {
    this.bgColor = this.background + color + ";";
  }

  ngOnInit(): void {
  }

}
