import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {DbtaskService} from '../app/services/dbtask.service' // SERVICIOS DE LA DBTASK
import {AuthenticationService} from '../app/services/authentication.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private sqlite: SQLite,
    private DbtaskService: DbtaskService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
    public authenticationService:AuthenticationService,
    public router: Router
    ) {   
      this.initializeApp();
    
  }

  // FUNCION PARA DIRIGIR PAGINAS
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['perfil-user']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }



  /**FUNCION PARA GENERAR LA BASE DE DATOS */
  private createDatabase(){
    this.sqlite.create({ // Se usa la función create para crear la base de datos
      name:'data.db', // Se llamara data
      location:'default'
    }).then((db)=>{
     this.DbtaskService.setDatabase(db); 
     this.DbtaskService.createTables();
    }) // Si todo sale bien, muestra por consola el log del db
    .catch(error=>{console.error('sadasd');}); // Si sale algo mal, muestra por consola el error
  }
}

