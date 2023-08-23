import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(formData: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/auth/register'; // Replace with your API URL
    return this.http.post(apiUrl, formData);
  }
}
