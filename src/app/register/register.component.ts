import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService : UserService, private router:Router){}

  registerUser(addUserForm: any) {
    console.log(addUserForm.value);
    this.userService.addNewUser(addUserForm.value).subscribe({
      next: () =>{ 
        alert("User Registered successfully");
        this.router.navigate(['']);
      },
      error: (err) => console.error('Error during registration:', err)
    });
  }
}
