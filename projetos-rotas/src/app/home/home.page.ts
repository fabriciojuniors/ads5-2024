import { Component, inject } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
          RouterModule],
})
export class HomePage {
  
  private rota = inject(Router);
  public parametro = 'teste'

  public navegar() {
    this.rota.navigateByUrl("/pagina1");
  }
}
