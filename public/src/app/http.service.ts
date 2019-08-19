import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  };
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getOneTask(_id: string){
    return this._http.get(`/api/tasks/${_id}`);
  }
  // postToServer(num){
  //   return this._http.post('/api/tasks', num);
  // }
}