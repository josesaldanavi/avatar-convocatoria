import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './pokemones/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
