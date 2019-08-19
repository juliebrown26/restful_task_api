import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: object;
  oneTask:  object;

  constructor(private _httpService: HttpService){ }
  ngOnInit(){
    this.getTasksFromService();
    this.getOneTaskFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got the tasks", data);
      this.tasks = data;
    });
  };
  getOneTaskFromService(){
    let observable = this._httpService.getOneTask();
    observable.subscribe(data => {
      console.log("Got the one task", data);
      this.oneTask = data;
    });
  };
};
