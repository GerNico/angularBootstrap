import {Component, OnInit} from '@angular/core';

interface TestI {
  name: string;
  description: string;
  score: string;
  opened: boolean;
  started: boolean;
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

  ngOnInit() {
    this.tests = [
      {
        name: 'test 1',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '27/120',
        opened: true,
        started: false
      },
      {
        name: 'test 2',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '37/192',
        opened: false,
        started: false
      },
      {
        name: 'test 3',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.`,
        score: '0/81',
        opened: true,
        started: false
      }
    ];
  }

  openClose(index: number) {
    this.tests[index].opened = !this.tests[index].opened;
    console.log(index);
  }
}
