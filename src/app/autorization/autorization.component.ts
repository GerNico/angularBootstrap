import {Component, OnInit, ViewChild} from '@angular/core';
import {LinkItemI} from '../app.component';
import {QuestionsService} from '../shared/questions.service';

interface User {
  login: string;
  password: string;
  email: string;
  status: string;
  toRemember: boolean;
}


@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent implements OnInit {

  constructor(public questionService: QuestionsService) {
  }

  user: User;
  passwordRecovering: LinkItemI;
  title: string;
  file: File;
  @ViewChild('file') myFile;

  ngOnInit() {
    this.user = {
      login: '',
      password: '',
      email: 'some.user@email.com',
      status: 'new',
      toRemember: false
    };
    this.title = 'Sign In';
    this.passwordRecovering = {reference: '/root/forgot', label: 'Forgot password?', theClass: ''};
  }

  fileSubmit() {
    this.questionService.submitFile(this.file).subscribe(item => console.log(item));
  }

  login() {
    console.log(this.user);
  }

  fileChange(files: FileList) {
    this.file = files.item(0);
  }
}
