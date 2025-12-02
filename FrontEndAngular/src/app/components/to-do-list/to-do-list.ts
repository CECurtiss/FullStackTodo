import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, DatePipe,RouterLink, RouterModule,FormsModule],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {
  constructor(private itemService: ItemService,
    private cdr: ChangeDetectorRef
  ) {};

  items: Item [] = [];

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      console.log(this.items);
      this.cdr.detectChanges();
    });
  };

  // Delete Item
  deleteItem(id: number): void {
    console.log('Deleting item with id:', id);
    this.itemService.deleteItemById(id).subscribe({
      next: () => {
      this.items = this.items.filter(item => item.id !== id);
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error("Error deleting item:", err);
    }
  });
  };

  // Update completed boolean
  updateCompleted(item: Item): void {
    console.log('Updating item:', item);
    this.itemService.updateItem(item).subscribe({
      next: (updatedItem) => {
        console.log('Item updated:', updatedItem);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error updating item:", err);
      }
    });
  }
}