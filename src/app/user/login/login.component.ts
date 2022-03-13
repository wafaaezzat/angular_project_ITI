import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_models/login/login.model';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form : NgForm){
    const user : User = <User>{
      email: form.value.email,
      password: form.value.password
    }
    this.authService.login(user).subscribe((res) =>{
      console.log(res);
      sessionStorage.setItem('token' , res.token)
      
    })
  }
}
