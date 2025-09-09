import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { Task } from './models/task.model';
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { TASKS } from './data/tasks.data';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TaskListComponent, TaskDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'simple-task-management-app';
  allTasks : Task[] = TASKS;
  selectedTask: Task | null=null;
  taskInbox(task:any){
    this.selectedTask = task;
  }

  get pendingTasks():Task[]{
    return this.allTasks.filter(t => t.status === 'pending')
  }
}
