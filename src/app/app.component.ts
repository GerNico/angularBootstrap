import { Component } from '@angular/core';

export interface LinkItemI {
  reference: string;
  label: string;
  theClass: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBootstrap';
}
