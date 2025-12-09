import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnInit {
  constructor(private itemService: ItemService,
    private router: Router
  ) {};

  today: string = new Date().toISOString().split('T')[0];

  newTask: Item = this.resetTask();
  
  private resetTask(): Item {
    return {
      id: 0,
      priority: '',
      task: '',
      dueDate: new Date,
      completed: false,
      dateCompleted: undefined
    };
  };

  addTask(): void {
    console.log(this.newTask);
    this.itemService.addItem(this.newTask).subscribe({
      next: (addedItem) => {
        console.log('Item added successfully:', addedItem);
        this.router.navigate(['/to-do-list']);
      },
      error: (err) => console.error(err)
    })
      this.newTask = this.resetTask();
  };
  
  ngOnInit(): void {
    console.log(this.newTask)
  };
  
};
