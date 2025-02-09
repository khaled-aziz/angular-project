import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLinkActive, RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  vaild:boolean= true;
  fb= inject(FormBuilder);
  loginform= this.fb.group({
    username: [''],
    password: ['']
  })
  login(){
    this._AuthService.login(this.loginform.value).subscribe({
      next: (res) => {
        this.vaild= true;
        localStorage.setItem('token',res.accessToken);
        this._AuthService.saveUserData()
        
        this._Router.navigateByUrl('/home')
      },
      error: () => {
        this.vaild=false;
      }
    })
  }
}
