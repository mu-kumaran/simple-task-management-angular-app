import { Component, EventEmitter, Output } from '@angular/core';
import { Priority, Task } from '../models/task.model';
@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskLists: Task[] = [
    { id: 1, title: "Learn Angular", description: "Practice components and binding", status:'pending', priority:Priority.HIGH },
    { id: 2, title: "Build Task Manager", description: "Use @for and @if syntax" ,status:'in-progress', priority:Priority.MEDIUM},
    { id: 3, title: "Review Project", description: "Test and debug app",status:'done', priority:Priority.LOW }
  ];

  @Output() sendTask = new EventEmitter<Task>();

  taskSenderBox(task: Task){
    return this.sendTask.emit(task)
  }

  get totalTasks():number{
    return this.taskLists.length
  }
}
