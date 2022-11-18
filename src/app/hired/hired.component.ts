import { Component, OnInit } from '@angular/core';
import { Cv } from 'models/Cv';
import { HiredService } from '../services/hired.service';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.component.html',
  styleUrls: ['./hired.component.scss']
})
export class HiredComponent implements OnInit {
  hiredList: Cv[]= [];

  constructor(
    private hiredService : HiredService
  ) { }

  ngOnInit(): void {

  }

}
