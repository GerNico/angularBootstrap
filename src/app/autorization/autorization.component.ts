import {Component, OnInit} from '@angular/core';
import {LinkItemI} from '../app.component';

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

  constructor() {
  }

  user: User;
  passwordRecovering: LinkItemI;
  title: string;

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

  login() {
    console.log(this.user);
  }

}
