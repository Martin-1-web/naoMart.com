import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserContact } from '../user-contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private _contactService = inject(ContactService);
  contactModel = new UserContact()

  errorMsg: string = '';
  submitForm() {

    if(this.contactModel.name === '' || this.contactModel.email === '' || this.contactModel.message === '') {
      console.log("Warning: can't send empty values!")
      return;
    }

    this._contactService.sendContactData(this.contactModel).subscribe({next: (data) => {console.log('Success: ', data);}, 
    error: (err) => {console.log('ERROR: ', this.errorMsg = err)}})

    alert('Succefully sent')
  }

}
