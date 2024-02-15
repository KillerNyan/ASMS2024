import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clases-reportes',
  templateUrl: './clases-reportes.page.html',
  styleUrls: ['./clases-reportes.page.scss'],
})
export class ClasesReportesPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
