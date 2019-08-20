import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: Task[];
  oneTask:  Task;
  newTask: Task;
  task: Task;

  constructor(private _httpService: HttpService){ }
  ngOnInit(){
    this.getTasks();
    this.newTask = {title: '', description: '', completed: false}
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = {title: "", description: "", completed: false}
    })
  }
  getTasks(){
    console.log("Got the tasks");
    let observable = this._httpService.getTasks();
    observable.subscribe((data: Task[]) => { 
      this.tasks = data;
    });
  };
  onUpdate(task: Task){
    let observable = this._httpService.updateTask(task);
    observable.subscribe((data: Task) => {
      console.log("updating the task", data);
    })
  };
  onUpdateClick(task: Task){
    this.task = task;
  }
  onRemove(task: Task, index: number){
    let observable = this._httpService.removeTask(task);
    observable.subscribe((data: Task) => {
      console.log('removing task', data);
      this.tasks.splice(index, 1);
    });
  };
}
