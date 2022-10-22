import { Component, OnInit } from '@angular/core';
import { Cv } from 'models/Cv';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss'],
})
export class CvListComponent implements OnInit {
  list: Cv[] = [
    new Cv('Sahnoun', 'Dali', 21, '1432423523', 'Student', 'dali.png'),
    new Cv('Baccouche', 'Mooza', 22, '54642542', 'Student', 'motaz.jpeg'),
  ];

  selected: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeSelected(number: number) {
    this.selected = number;
  }
}
