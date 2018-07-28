import {Component, OnInit} from '@angular/core';
import {LinkItemI} from '../app.component';

interface DropDownIconI {
  htmlCaptionIcon: string;
  htmlCaptionLabel: string;
  listItems: LinkItemI[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  brandItem: LinkItemI;
  menuList: LinkItemI[];
  dropDownMenuList: DropDownIconI;

  ngOnInit() {
    this.brandItem = {reference: 'assets/Test-paper-icon.png', label: 'Testing Galaxy', theClass: 'navbar-brand'};

    this.menuList = [
      {reference: '/root/home', label: 'Find tests', theClass: ''},
      {reference: '/root/login', label: 'Sign in', theClass: 'active'},
      {reference: '/root/signup', label: 'Sign up', theClass: ''}
    ];

    this.dropDownMenuList = {
      htmlCaptionIcon: 'glyphicon glyphicon-list-alt',
      htmlCaptionLabel: 'My courses',
      listItems: [
        {reference: '/test1', label: 'first test', theClass: ''},
        {reference: '/test2', label: 'second test', theClass: 'active'}
      ]
    };
  }

}
