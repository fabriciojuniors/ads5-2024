import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-informacao-aluno',
  templateUrl: './informacao-aluno.component.html',
  styleUrls: ['./informacao-aluno.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class InformacaoAlunoComponent  implements OnInit {

  private modalController = inject(ModalController)

  constructor() { }

  ngOnInit() {}

  public async fechar() {
    this.modalController.dismiss();
  }

}
