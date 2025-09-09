import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  @Input() taskDetail! : Task | null; 

  // get pendingTasks(): Task{
  //   return this.taskDetail.filter(t => t.status === 'pending')
  // }
}
