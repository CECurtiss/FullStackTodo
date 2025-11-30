import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, DatePipe],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  constructor(private itemService: ItemService) {}

  newTask: Item = this.resetTask();
  
  private resetTask(): Item {
    return {
      id: 0,
      priority: '',
      task: '',
      dueDate: new Date(),
      completed: false,
      dateCompleted: undefined
    }
  }

  addTask(): void {
    console.log(this.newTask);
    this.itemService.addItem(this.newTask);
    this.newTask = this.resetTask();
  }

  ngOnInit(): void {

  }
  
}