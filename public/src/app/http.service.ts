import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
  };
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getOneTask(){
    return this._http.get('/api/tasks/:id');
  }
}