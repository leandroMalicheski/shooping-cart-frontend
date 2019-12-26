import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) { }

  getCartByUserId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCartByUserId/${id}`);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
