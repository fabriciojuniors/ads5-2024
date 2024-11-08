import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Pagina2Page implements OnInit {

  public rotaAtiva = inject(ActivatedRoute);

  public parametro: string | null = '';

  constructor() { }

  ngOnInit() {
    const mapaParametros = this.rotaAtiva.snapshot.paramMap;
    const numero = mapaParametros.get('numero');
    this.parametro = numero;

    console.log(this.rotaAtiva.snapshot.data['titulo'])
  }

}
