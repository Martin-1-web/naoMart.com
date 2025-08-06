import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  userModel = new User()
  private userService = inject(UserService);
  errorMsg: string = ''

  onSubmit() {
    
    if(this.userModel.name === '' || this.userModel.email === '' || this.userModel.password === '') {
      console.log("Warning: can't send empty values");
      return;
    }
    this.userService.sendData(this.userModel).subscribe({next: (data) => {console.log('Success: ', data);}, 
    error: (err) => this.errorMsg = err})
  }
}
