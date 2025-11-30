import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  constructor(private itemService: ItemService) {}

  newTask: Item = {
    id: 0,
    priority: '',
    task: '',
    dueDate: new Date(),
    completed: false,
    dateCompleted: undefined
  }

  addTask(): void {
    this.itemService.addItem(this.newTask);
    this.newTask = {
      id: 0,
      priority: '',
      task: '',
      dueDate: new Date(),
      completed: false,
      dateCompleted: undefined
    };
  }

  
}