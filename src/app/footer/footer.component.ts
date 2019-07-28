import { Component, OnInit } from '@angular/core';
import { Kesteven } from '../kesteven';
import { KestevendataService } from '../kestevendata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private pService: KestevendataService) { }

  myInfo: Kesteven;

  ngOnInit() {
    this.loadPersonalData();
  }

  loadPersonalData():void {
    this.myInfo = this.pService.loadData();
  }
}