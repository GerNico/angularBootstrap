import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class QuestionsService implements OnInit {

  private url = 'http://localhost:7001/rest/test/';

  constructor(private _http: Http) {
  }

  public getTestById(n: number) {
    return this._http.get(this.url + n).map(response => response.json());
  }

  ngOnInit(): void {
  }
}
