import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

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
  addTask(newTask){
    return this._http.post<Task>('/api/tasks', newTask)
  }
  updateTask(task: Task){
    return this._http.put(`/api/tasks/${task._id}`, task)
  }
  removeTask(task: Task){
    return this._http.delete(`/api/tasks/${task._id}`)
  }
}