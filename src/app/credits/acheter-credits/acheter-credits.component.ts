import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login.service';
import { CreditPurchaseService } from 'src/app/services/credit-purchase.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from 'src/app/success-modal/success-modal.component';
@Component({
  selector: 'app-acheter-credits',
  templateUrl: './acheter-credits.component.html',
  styleUrls: ['./acheter-credits.component.css']
})
export class AcheterCreditsComponent {
  user: any;
  amount: number =0; // Default selected amount
  constructor(private router: Router,  private dialog: MatDialog ,private loginService:LoginService,private creditPurchaseService: CreditPurchaseService,) { }
  ngOnInit() {
    this.user = this.loginService.getUserData();
    console.log(this.user);
  }
  
  purchaseCredits() {
    const userId = this.loginService.getUserId(); // Fetch user ID from auth service
    const amount = this.amount;

    this.creditPurchaseService.purchaseCredits(userId, amount).subscribe(
      (response) => {
        console.log('Credits purchased successfully',response);
         // Open the success modal
      },
      error => {
        console.error('Error purchasing credits:', error);
      }
    );
  }
}
