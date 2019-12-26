import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getUser(id: string): Observable<any> {
    debugger;
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, user);
  }

}
