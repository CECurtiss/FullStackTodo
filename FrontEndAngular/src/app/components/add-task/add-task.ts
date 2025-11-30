import { Component } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  newTask: Item = {
    id: 0,
    priority: '',
    task: '',
    dueDate: new Date(),
    completed: false,
    dateCompleted: undefined
  }
}