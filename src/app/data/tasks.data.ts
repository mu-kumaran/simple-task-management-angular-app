import { Task,Priority } from "../models/task.model";

export const TASKS: Task[] = [
    { id: 1, title: "Learn Angular", description: "Practice components and binding", status:'pending', priority:Priority.HIGH },
    { id: 2, title: "Build Task Manager", description: "Use @for and @if syntax" ,status:'in-progress', priority:Priority.MEDIUM},
    { id: 3, title: "Review Project", description: "Test and debug app",status:'done', priority:Priority.LOW }
  ];