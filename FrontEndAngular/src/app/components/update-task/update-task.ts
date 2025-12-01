import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemService } from '../../services/item';
import { Item } from '../../models/item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-task.html',
  styleUrl: './update-task.css',
})
export class UpdateTask implements OnInit {

  item: Item | null = null;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Retrieved Id", id);
    this.retreiveItemById(id);
  }

  retreiveItemById(id: number): void {
    this.itemService.getItemById(id).subscribe({
      next: (data) => {
        this.item = data;
        console.log("Item loaded:", this.item);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error fetching item by id:", err);
      }
    });
  }
}