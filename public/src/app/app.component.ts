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
  allClick: boolean;
  showOne: boolean;
  newTask: object;

  constructor(private _httpService: HttpService){ }
  ngOnInit(){
    this.allClick = true;
    this.showOne = false;
    this.newTask = {title: '', description: ''}
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = {title: "", description: ""}
    })
  }
  getTasks(){
    console.log("Got the tasks");
    let observable = this._httpService.getTasks();
    observable.subscribe((data: Task[]) => { 
      this.tasks = data;
    });
  };
  getOneTask(task: Task){
    console.log(task)
    let observable = this._httpService.getOneTask(task._id);
    observable.subscribe((data: Task) => {
      console.log("Got the one task", data);
      this.oneTask = data;
      this.showOne = true;
    });
  };
  onUpdate(task: Task){
    let observable = this._httpService.updateTask(task);
    observable.subscribe((data: Task) => {
      console.log("updating the task", data);

    })
  }
};
