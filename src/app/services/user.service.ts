import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../model/User'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:3000/users'; 

  constructor(private httpClient: HttpClient) { }

  // Method to register a new user
  addNewUser(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.baseUrl, user, { headers: headers });
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }
  
  getCurrentUser(): Observable<User> {
    const userId = localStorage.getItem('userId');
    return this.httpClient.get<User>(`${this.baseUrl}/${userId}`);
  }

  
}
