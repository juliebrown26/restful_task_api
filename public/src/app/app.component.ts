import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: object[];
  oneTask:  object;
  allClick: boolean;
  showOne: boolean;

  constructor(private _httpService: HttpService){ }
  ngOnInit(){
    // this.getTasks();
    // this.getOneTask();
    this.allClick = true;
    this.showOne = false;
  }
  getTasks(){
    console.log("Got the tasks");
    let observable = this._httpService.getTasks();
    observable.subscribe((data: object[]) => { 
      this.tasks = data;
    });
  };
  getOneTask(task: object){
    console.log(task)
    let observable = this._httpService.getOneTask(task._id);
    observable.subscribe(data => {
      console.log("Got the one task", data);
      this.oneTask = data;
      this.showOne = true;
    });
  };
  //example
  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  //   let observable = this._httpService.postToServer({data: num});
  //   observable.subscribe(data => console.log("Got our data", data));
  // }
};
