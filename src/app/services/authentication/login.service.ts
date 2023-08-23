import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user:any;
  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    const apiUrl = 'http://localhost:3000/auth/login';
    return this.http.post(apiUrl, formData).pipe(
      tap((response=>{
        localStorage.setItem('user-data',JSON.stringify(response));
      })
    ));
  }
  setUser(user: any) {
    this.user = user;
  }
   
  getUserData(): string | null {
    // Retrieve and parse JWT token from local storage
    const data = localStorage.getItem('user-data');
    console.log(data)
    return data ? JSON.parse(data) : null;
  }
  getUserToken():string|null{
     // Retrieve and parse JWT token from local storage
     const data = localStorage.getItem('user-data');
     const data_=data ? JSON.parse(data) : null;
     return data_.token;
  }
  getUserId(){
    // Retrieve and parse JWT token from local storage
    const data = localStorage.getItem('user-data');
    const data_=data ? JSON.parse(data) : null;
    return data_.user._id;
 }
  getUser() {
    return this.user;
  }
}
