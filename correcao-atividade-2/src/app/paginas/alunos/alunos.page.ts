import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { inject } from '@angular/core';
import { InformacaoAlunoComponent } from 'src/app/componentes/informacao-aluno/informacao-aluno.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AlunosPage implements OnInit {

private modalController = inject(ModalController);

  constructor() { }

  ngOnInit() {
  }

  public async abrirInformacoes() {
    const modal = await this.modalController.create({
      component: InformacaoAlunoComponent
    });
    
    modal.present();
  }

}
