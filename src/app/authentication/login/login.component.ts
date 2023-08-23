import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  identifiant: string = '';
  password: string = '';
  errorMessage: string = '';
  registrationSuccess: boolean = false;
  constructor(private route: ActivatedRoute,private router: Router,private loginService:LoginService) {}
  ngOnInit() {
    // Check if 'registrationSuccess' query parameter is present
    this.route.queryParams.subscribe(params => {
      this.registrationSuccess = params['registrationSuccess'] === 'true';
      if (this.registrationSuccess) {
        this.hideMessageAfterDelay(5000); // 5000 milliseconds (5 seconds)
      }
    });
  }
  hideMessageAfterDelay(delay: number) {
    setTimeout(() => {
      this.registrationSuccess = false; // Hide the message after the specified delay
    }, delay);
  }
  login() {
    const formData={
      identifiant:this.identifiant,
      password:this.password
    }
    this.loginService.login(formData).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful', response);
        // You can redirect the user to a dashboard or home page here
        // Store user information and navigate to dashboard
        this.loginService.setUser(response.user); // Assuming the response contains 'user' object
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'identifiant ou mot de passe incorrect';
      }
    );
  }
}
