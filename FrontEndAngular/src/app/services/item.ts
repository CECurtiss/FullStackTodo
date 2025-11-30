import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
    
  
  //  get items from backend
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }
}
  // add item to backend
// addItem(item: Item): void {
//     item.id = this.items.length + 1;
//     this.items.push(item);
  // update item in backend


  // delete item from backend
  // deleteItem(id: number): void {
  //   this.items = this.items.filter(item => item.id !== id);
  // }

  // get item by id
  // getItemById(id: number): Item | undefined {
  //   return this.items.find(item => item.id === id);
  // }
  

