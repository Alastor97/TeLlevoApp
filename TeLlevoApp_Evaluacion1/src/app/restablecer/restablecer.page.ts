import { Component, OnInit, ViewChild} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
    // rescato desde el html el input #username
    @ViewChild ('username') user;
    // rescato desde el html el input #password
    @ViewChild ('password1') password1;
    // rescato desde el html el input #password
    @ViewChild ('password2') password2;

    usuario: string;
    password: string;

  constructor(private router: Router, private route: ActivatedRoute){
    this.route.queryParams.subscribe(data => {
      this.usuario = data.usuario
    })
  }

  restablecer(){
    if(this.user.value == this.usuario) {

      if(this.password1.value == this.password2.value){

        this.router.navigate(['../login'],{
          queryParams:{
            password: this.password1.value,
            pass: true
          }
        });
      } else {
        console.log("LAS CONTRASEÑAS NO COINCIDEN");
      }

    } else {
      console.log("EL USUARIO NO EXISTE");
    }
  }

  ngOnInit() {
  }
}
