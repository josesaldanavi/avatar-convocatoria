import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
//para el funcionamiento de las peticiones que se hacen a la API
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './pokemones/pokemon.service';
//para el funcionamiento de la paginacion
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
