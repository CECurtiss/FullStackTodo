import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Item {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  // get items from backend

  // add item to backend

  // update item in backend

  // delete item from backend

  
}
