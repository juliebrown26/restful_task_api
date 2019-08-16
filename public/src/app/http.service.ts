import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
  };
  getTasks(){
    let tempObservable = this._http.get('/api/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks", data));
  }
  getOneTask(){
  let tempObservable = this._http.get('/api/tasks/:id');
  tempObservable.subscribe(data => console.log("Got the task", data));
}
}