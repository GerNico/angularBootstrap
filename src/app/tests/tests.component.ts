import {Component, OnInit} from '@angular/core';

interface TestI {
  name: string;
  description: string;
  score: string;
  status: string;
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() {
  }

  tests: TestI[];
  courseName: string;
  icons = {
    started: 'glyphicon glyphicon-pushpin',
    notStarted: 'glyphicon glyphicon-unchecked',
    done: 'glyphicon glyphicon-check',
  };

  ngOnInit() {
    this.courseName = 'Angular';
    this.tests = [
      {
        name: 'test 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '120/120',
        status: this.icons.done,
      },
      {
        name: 'test 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '0/192',
        status: this.icons.notStarted,
      },
      {
        name: 'test 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '31/81',
        status: this.icons.started,
      }
    ];
  }

  select(index: number) {
    console.log(index);
  }
}
