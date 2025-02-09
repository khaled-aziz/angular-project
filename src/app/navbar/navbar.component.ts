import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import {  FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  imports: [ RouterLinkActive, RouterLink, ReactiveFormsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  router= inject(Router)
  isLogged:boolean= false;
  seachWord:any= ' '
  searchControl =new FormControl('')
  authService = inject(AuthService)
  logout(){
    this.authService.logout()
  }
  search(){
    this.seachWord = this.searchControl.value;
    this.router.navigateByUrl(`/search/${this.seachWord}`)
  }
  ngOnInit(){
    this.authService.userdata.subscribe(()=>{
      if (this.authService.userdata.getValue()) {
        this.isLogged= true;
      } else {
        this.isLogged= false;
      }
    })
  }

}
