import { Injectable } from '@angular/core';
import {Task} from './Task'
@Injectable()
export class TaskService {

  constructor() { }

  getTasks():Array<Task>{
    let tasks = new Array<Task>();
    tasks.push(new Task('Learning Typescript', true),
      new Task('Learning Angular 2', false));
    return tasks;
  }
}
