import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080/item';

  constructor(private http: HttpClient) { }

  getItemsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  deleteItem(id: string): Observable<any> {
    debugger;
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getItem(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateItem(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  createItem(item: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, item);
  }
}
