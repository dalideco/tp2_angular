import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from 'models/Cv';

@Component({
  selector: 'app-cv-selector',
  templateUrl: './cv-selector.component.html',
  styleUrls: ['./cv-selector.component.scss'],
})
export class CvSelectorComponent implements OnInit {
  @Input() list: Cv[] = [];
  @Input() selected: number = 0;
  @Output() changeSelectedEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeSelected(number: number){
    this.changeSelectedEvent.emit(number)
  }
}
