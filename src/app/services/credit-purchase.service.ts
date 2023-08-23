import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { LoginService } from './authentication/login.service'; // Import AuthService
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditPurchaseService {

  constructor(private http: HttpClient, private authService: LoginService) {}

  purchaseCredits(userId: string, amount: number) {
    const token = this.authService.getUserToken(); // Fetch the JWT token from the AuthService

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the JWT token in the headers
    });

    const data = { userId, amount };
    return this.http.post('http://localhost:3000/credits/purchase-credits', data, { headers }).pipe(
      tap((response=>{
        // Assuming user info is stored as JSON string in localStorage under the key "user"
        const userJSON = localStorage.getItem('user-data');
        if(userJSON){
          const user = JSON.parse(userJSON);
          
        const newUser=JSON.stringify(response);
        const nU=JSON.parse(newUser);
        console.log(nU.user)
        user.user.amountSpent=nU.user.amountSpent;
         user.user.credits=nU.user.credits;
        const updatedUserJSON = JSON.stringify(user);
        localStorage.setItem('user-data',updatedUserJSON);
        }
  
        
      })
    ));;
  }
}
