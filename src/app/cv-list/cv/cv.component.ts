import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {


  //information fils
  @Input() name: string= "Sahnoun"
  @Input() firstName : string= "Dali"
  @Input() job: string= "Trainer"
  @Input() path: string = "dali.png"
  @Input() description: string = "tant qu'il y'a de la vite, il y'a de l'histoire"
  @Input() age: number = 21
  @Input() cin: string = "13412523412";

  constructor() { }

  ngOnInit(): void {
  }

  

}
