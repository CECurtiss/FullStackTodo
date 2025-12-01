import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items';
  constructor(private http: HttpClient) {}
    
  
  //  get items from backend
  getItems(): Observable<Item[]> {   
    return this.http.get<Item[]>(this.apiUrl);
  }
  // add item to backend
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);

  }
  // update item in backend
  
  
  // delete item from backend
  deleteItemById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    console.log('Deleting item with id:', id);
  return this.http.delete<void>(url); 
  }
  // get item by id
  // getItemById(id: number): Item | undefined {
    //   return this.items.find(item => item.id === id);
    // }
    
  }
        

