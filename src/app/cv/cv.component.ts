import { Component, OnInit,Input } from '@angular/core';
import { Cv } from 'models/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {


  //information fils
  @Input() cv: Cv = new Cv()

  constructor() { }

  ngOnInit(): void {
  }

  

}
