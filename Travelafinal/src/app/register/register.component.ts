import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      if(this.credentials.email == "" || this.credentials.name == "" || this.credentials.password == ""){
        alert("Please fill all fields to register");}
        else
      this.router.navigateByUrl('/register');
    }, (err) => {
      console.error(err);
    });
  }
  back(){
    console.log("aasd");
    this.router.navigateByUrl('/home');
  }
}