import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {
  constructor(private itemService: ItemService,
    private cdr: ChangeDetectorRef
  ) {
    
  }

  items: Item [] = [];

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      console.log(this.items);
      this.cdr.detectChanges();
    });
  }

  // deleteItem(id: number): void {
  //   this.itemService.deleteItem(id);
  //   this.items = this.itemService.getItems();
  // }

// update item needed here

}
