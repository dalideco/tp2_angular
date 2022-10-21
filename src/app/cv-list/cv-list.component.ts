import { Component, OnInit } from '@angular/core';
import { Cv } from 'models/Cv';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})



export class CvListComponent implements OnInit {

  list : Cv[]= [
    {
      name: "Sahnoun",
      firstName: "Dali",
      age: 21,
      cin: "1432423523",
      job: "Student", 
      path: "dali.png"
    },
    {
      name: "Baccouche",
      firstName: "Mooza",
      age: 22,
      cin: "1432423523",
      job: "Student", 
      path: "dali.png"
    }
  ]

  selected: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(number: number) {
    this.selected = number
  }

}
