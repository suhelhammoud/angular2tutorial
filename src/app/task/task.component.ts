import { Component, OnInit } from '@angular/core';
import {Task} from './Task';
import {TaskService} from './task.service'


@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

  tasks: Array<Task>;

  constructor(private taskServcie: TaskService) {
    // this.tasks = new Array<Task>();
  }


  ngOnInit() {
    // this.tasks.push(new Task('Learning Typescript', true),
    //   new Task('Learning Angular 2', false));
    this.tasks = this.taskServcie.getTasks();
  }

  setCompleted(task: Task, checked: boolean){
    task.completed = checked;
  }

  removeTask(task: Task){
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  doneTyping($event){
    if($event.which === 13){
      this.addTaskFromInput($event.target);
    }
  }

  addTaskFromInput(input){
    this.tasks.push(new Task(input.value, false));

    input.value = '';
  }

  completeAllTasks(){
    for (let task of this.tasks){
      this.setCompleted(task, true)
    }
  }

}
