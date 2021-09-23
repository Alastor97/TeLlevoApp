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

  data: any = {
    user: 'juancarlos0000',
    password: '123456'
  };

  constructor(private router: Router ) {}
  login(){
    if(this.user.value==this.data.user && this.password.value==this.data.password ){
      // ingreso de usuario y pasar parametros de usuario
      this.router.navigate(['../perfil-user'],{queryParams:{
        usuario:this.user.value
      }});
      
    }
  }
  
  ngOnInit() {
   
  }

}

