import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from '../../models/registerUser';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import  Validation  from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerUser: RegisterUser = {
    userName: '',
    email: '',
    password: '',
  };
  registerForm!: FormGroup;

  
  constructor(private authService: AuthService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
    },{
      validators:[Validation.match('password','confirmPassword')]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.registerUser = this.registerForm.value;
      this.authService.register(this.registerUser);
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
}
