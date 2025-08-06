import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  errorMsg: string = '';

  emailModel = new Email();
  private _emailService = inject(EmailService)

  onSubmit() {
  
    if(!this.emailModel) {
      console.log("Warning: email can't be empty\nand must be valid")
      return
    }
    console.log(this.emailModel);
    this._emailService.sendNewsLetterMail(this.emailModel).subscribe({next: (data) => {console.log('Success: ', data);}, 
  
    error: (err) => this.errorMsg = err})
  }

}
