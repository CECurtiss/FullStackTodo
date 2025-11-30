import { Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {

  items: Item [] = [];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  
}
