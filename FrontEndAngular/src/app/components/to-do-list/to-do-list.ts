import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, DatePipe,RouterLink, RouterModule],
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

  deleteItem(id: number): void {
    console.log('Deleting item with id:', id);
    this.itemService.deleteItemById(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
      this.cdr.detectChanges();
    });
  }


}
