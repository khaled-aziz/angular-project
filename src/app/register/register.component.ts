import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb= inject(FormBuilder);
  authService= inject(AuthService);
  router= inject(Router);
  registerform= this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    lastName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    age: ['',[Validators.required,Validators.min(12)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{5,}$')]]
  })
  submitForm(){
    if (this.registerform.invalid) {
      return;
    }
    this.authService.register(this.registerform.value).subscribe((res)=>{
      this.router.navigateByUrl('/login');
    })
  }
}
