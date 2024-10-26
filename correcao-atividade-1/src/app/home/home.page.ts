import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon, IonText, IonInput, IonTextarea, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {starOutline, cartOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonTextarea, IonInput, IonText, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({starOutline,cartOutline});
  }
}
