import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
//para el funcionamiento de las peticiones que se hacen a la API
import {HttpClientModule} from '@angular/common/http'
import { PokemonService } from './pokemones/pokemon.service';
//para el funcionamiento de la paginacion
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//rutas
import { RouterModule,Routes } from '@angular/router';
import { EvolucionesComponent } from './pokemones/evoluciones/evoluciones.component';
const routes: Routes=[
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component:PokemonesComponent},
  {path:'evoluciones',component:EvolucionesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonesComponent,
    EvolucionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
