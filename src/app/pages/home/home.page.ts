import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  datosUsuario: any;

  constructor( private strg: Storage, private navCtrl: NavController ) { }

  async ngOnInit() {
    this.datosUsuario = await this.strg.get('datos');
      if (this.datosUsuario.tipo_usuario == '1' || this.datosUsuario.tipo_usuario == '2') {
        this.navCtrl.navigateRoot('/grados');
      } else if (this.datosUsuario.tipo_usuario == '3') {
        this.navCtrl.navigateRoot('/tab');
      } else {
        this.navCtrl.navigateRoot('/tab-hijos');
      }
  }

}
