import {Component, OnInit} from '@angular/core';

interface CourseI {
  pictureURL: string;
  name: string;
  description: string;
}


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: CourseI[];
  headers: string[];
  search: string;

  constructor() {
  }

  ngOnInit() {
    this.headers = ['', 'logo', 'name', 'description'];
    this.courses =
      [{pictureURL: 'assets/js.png', name: 'JavaScript', description: '...'},
        {pictureURL: 'assets/kotlin.png', name: 'Kotlin', description: '...'},
        {pictureURL: 'assets/linux.png', name: 'Intro to Linux', description: '...'},
        {pictureURL: 'assets/node.png', name: 'Node js for beginners', description: '...'}
      ];
  }

  selected(index: number) {
    console.log('selected ' + index);
  }
}
