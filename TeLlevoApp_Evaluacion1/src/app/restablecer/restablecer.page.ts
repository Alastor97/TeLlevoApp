import { Component, OnInit, ViewChild} from '@angular/core';

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
  constructor(){}

  ngOnInit() {
  }

}
