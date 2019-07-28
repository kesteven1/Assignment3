import { Injectable } from '@angular/core';
import { Kesteven } from '../app/kesteven';

@Injectable({
  providedIn: 'root'
})
export class KestevendataService {
  loadData(): Kesteven {
    const MYINFO: Kesteven = {
      sid: 991249272,
      sname: 'Steven Kerr',
      scampus: 'Sheridan Trafalgar',
      slogin: 'kesteven',
      sassignment: 'Assignment 3'
    };
    return MYINFO;
  }

  constructor() { }
}
