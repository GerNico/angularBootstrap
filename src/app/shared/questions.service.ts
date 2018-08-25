import {Injectable, OnInit} from '@angular/core';
import {Test} from './test';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class QuestionsService implements OnInit {

  private url = 'http://localhost:7001/rest/test/';

  constructor(private _http: HttpClient) {
  }

  public getTestById(n: number): Observable<Test> {
    return this._http.get<Test>(this.url + n);
  }

  ngOnInit(): void {
  }
}
