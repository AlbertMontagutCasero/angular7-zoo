import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { TiendaComponent} from './components/tienda/tienda.component';
import {ParquesComponent} from './components/parques/parques.component';

@NgModule({
  declarations: [ // Componentes, Directivas y pipes que se usaran en este modulo
    AppComponent,
    TiendaComponent,
    ParquesComponent
  ],
  imports: [ // modulos y componentes internos de angular
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // servicios de manera global para toda la aplicacion
  bootstrap: [AppComponent] // Componente que lanza la aplicacion
})
export class AppModule { }
