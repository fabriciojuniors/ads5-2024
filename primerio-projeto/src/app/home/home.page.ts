import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonInput, IonIcon, IonList, IonItem, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { starOutline}  from 'ionicons/icons'
import {JsonPipe} from '@angular/common'
import { FrutaComponent } from '../components/fruta/fruta.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FrutaComponent, JsonPipe, IonListHeader, IonItem, IonList, IonIcon, IonInput, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  public dados:string[] = ['ABACAXI', 'BANANA', 'KIWI']
  public dados2: any[] = [{nome: 'Jose', cpf: 12345678}]

  constructor() {
    addIcons({starOutline});
  }

public minhaFuncao() {
    alert("Clicou no botão")
}

}
