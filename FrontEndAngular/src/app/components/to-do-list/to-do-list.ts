import { Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [DatePipe],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {
  constructor(private itemService: ItemService) {}

  items: Item [] = [];

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  // deleteItem(id: number): void {
  //   this.itemService.deleteItem(id);
  //   this.items = this.itemService.getItems();
  // }

// update item needed here

}
