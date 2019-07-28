import { Component, OnInit } from '@angular/core';
import { SongInfo } from '../songInfo';
import { MYSONGS } from '../../assets/data/mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  songInfo: SongInfo;
  mySongs = MYSONGS;

  constructor() { }

  ngOnInit() {
    this.songInfo = new SongInfo;
  }

  changeInfo(i){
    this.songInfo = this.mySongs[i];
  }
}