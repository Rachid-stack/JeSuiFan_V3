import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/authentication/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  nom: string ='';
  prenom: string ='';
  identifiant: string = '';
  telephone: string = '';
  contactParTelephone: boolean=false;
  email: string = '';
  type:string = '';
  password: string = '';
  confirmPassword:string='';
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false; // Add this property
  recaptchaResponse: string = ''; // Store reCAPTCHA response


  constructor(private registrationService: RegistrationService,private router: Router) {}

  // Add this method to handle reCAPTCHA response
  handleRecaptcha(event:any) {
    this.recaptchaResponse = event;
  }


  submitForm() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mot de passe ne correspondent pas !';
      return;
    }
    this.isLoading = true;
    const formData = {
      identifiant: this.identifiant,
      email: this.email,
      nom: this.nom,
      prenom: this.prenom,
      telephone: this.telephone,
      confirmPassword: this.confirmPassword,
      password: this.password,
      contactParTelephone: this.contactParTelephone,
      type:this.type,
      recaptchaResponse: this.recaptchaResponse // Include reCAPTCHA response in the form data
    };

    this.registrationService.register(formData).subscribe(
      (response) => {
        this.router.navigate(['/login'], { queryParams: { registrationSuccess: 'true' } });

        //this.successMessage = 'Registration successful!';
        this.errorMessage = '';
        console.log(response);
        // Perform any additional actions or navigation
      },
      (error) => {
        this.successMessage = '';
        this.errorMessage = 'Registration failed. Please try again.';
        console.log(error);
        // Perform error handling and display error messages
      }
    ).add(() => {
      this.isLoading = false; // Set isLoading to false when request completes
    });;
  }
}
