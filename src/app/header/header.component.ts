import { Component, OnInit } from '@angular/core';
import { Kesteven } from '../kesteven';
import { KestevendataService } from '../kestevendata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pService: KestevendataService) { }

  myInfo: Kesteven;

  ngOnInit() {
    this.loadPersonalData();
  }

  loadPersonalData():void {
    this.myInfo = this.pService.loadData();
  }
}