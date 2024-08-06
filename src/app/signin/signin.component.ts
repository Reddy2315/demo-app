import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../model/User';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  users: User[] = []
  loginErrorMsg : string = '';
  signinForm: FormGroup;
  constructor(
    private userService: UserService, 
    private router: Router, 
    private fb: FormBuilder
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  doLogin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.userService.getAllUsers().subscribe(data => {
      const user = data.find(u => u.email === email && u.password === password);
      if (user) {
        //alert("Login Success")
        this.router.navigate(['/dashboard']);
      }
      else {
        //alert("Login Failed");
        this.loginErrorMsg = "SignIn Failed"
      }
    });
  }
}

