import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // rescato desde el html el input #username
  @ViewChild ('username') user;
  // rescato desde el html el input #password
  @ViewChild ('password') password;

  

  constructor(private router: Router ) {}
  login(){
    if(this.user.value=="juancarlos00" && this.password.value== "123456" ){
      this.router.navigate(['../perfil-user']);
      
    }
  }
 

  ngOnInit() {
  }

}
