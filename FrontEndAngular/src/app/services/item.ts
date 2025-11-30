import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  // private apiUrl = 'http://localhost:5000';
  // constructor(private http: HttpClient) {}
    private items: Item[] = [
      {
         id: 1, 
         priority: 'High', 
         task: 'Finish project', 
         dueDate: new Date('2024-06-30'), 
         completed: false 
        },
       { 
        id: 2, 
        priority: 'Medium', 
        task: 'Buy groceries', 
        dueDate: new Date('2024-07-02'), 
        completed: true, 
        dateCompleted: new Date('2024-06-25')
       },
       { 
        id: 3, 
        priority: 'Low', 
        task: 'Walk the dog', 
        dueDate: new Date('2024-07-05'), 
        completed: false
       }
     ];
      constructor() {}


   //  get items from backend
  getItems(): Item[] {
    return [...this.items];
  }
  // add item to backend
addItem(item: Item): void {
    item.id = this.items.length + 1;
    this.items.push(item);
  }
  // update item in backend


  // delete item from backend
  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  // get item by id
  getItemById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }
  
}
