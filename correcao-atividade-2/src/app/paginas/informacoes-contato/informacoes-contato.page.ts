import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardContent,IonCardTitle, IonCardSubtitle,IonButtons, IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {starOutline} from 'ionicons/icons'

@Component({
  selector: 'app-informacoes-contato',
  templateUrl: './informacoes-contato.page.html',
  styleUrls: ['./informacoes-contato.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardContent,
            IonCardTitle, IonCardSubtitle,
    IonButtons, IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InformacoesContatoPage implements OnInit {

  constructor() { 
    addIcons({starOutline})
  }

  ngOnInit() {
  }

}
