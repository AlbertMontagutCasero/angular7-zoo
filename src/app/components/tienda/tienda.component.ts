import { Component } from '@angular/core';

@Component({
  selector : 'tienda',
  template: `
    <h1>{{titulo}}</h1>
    <ul>
      <li>
        Camiseta rosa
      </li>
      <li>
        Gorra negra
      </li>
    </ul>
  `,
  styles: ['h1 {color:blue}']
})

export class TiendaComponent {
  public titulo;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }
}
