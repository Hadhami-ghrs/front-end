import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private fb1: FormBuilder, private authService: AuthService, private router:Router) {}


  ngOnInit(): void {
      this.form = this.fb1.group({
        personal: this.fb1.group({
          role: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          rememberMe:['', Validators.required],
        }),
        
      });
    }
    

    onsubmit() {
  if (this.form.valid) {
    console.log('Form Data:', this.form.value);
    alert('Form Submitted Successfully!');
  } else {
    alert('Please try again');
  }
}

  }
