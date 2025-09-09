export interface Task {
  id: number,
  title: string,
  description: string,
  completed?:boolean,
  status : TaskStatus,
  priority: Priority
}

export type TaskStatus = 'pending' | 'in-progress' | 'done';

export enum Priority{
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}