import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { Task } from './models/task.model';
import { TaskDetailsComponent } from "./task-details/task-details.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TaskListComponent, TaskDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'simple-task-management-app';

  selectedTask: Task | null=null;
  taskInbox(task:any){
    this.selectedTask = task;
  }
}
