import { Component, OnInit } from '@angular/core';
import {MyTeammate} from './my-teammate';

@Component({
  selector: 'app-my-teammate-list',
  templateUrl: './my-teammate-list.component.html',
  styleUrls: ['./my-teammate-list.component.css']
})
export class MyTeammateListComponent implements OnInit {

  // create an array of objects:
  myTeammateList: MyTeammate[] = [
    new MyTeammate('Tran', 'Ngoc Anh', 'Thu'),
    new MyTeammate('Nguyen', 'Tuan', 'Anh'),
    new MyTeammate('Nguyen', 'Anh', 'Minh'),
    new MyTeammate('Nguyen', 'Huu', 'Tri'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
