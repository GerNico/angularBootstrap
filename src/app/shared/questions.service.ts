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

  public submitFile(file: File): Observable<FormData> {
    const formToSubmit = new FormData();
    formToSubmit.append('file', file);
    formToSubmit.append('comment', 'hi my dear friend');
    formToSubmit.append('id', '1234');
    formToSubmit.append('managerId', '435944');
    return this._http.post<FormData>('http://localhost:7001/rest/file/uploadFile', formToSubmit);
  }

  ngOnInit(): void {
  }
}
