import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Evolucion } from './evolucion';
@Component({
  selector: 'app-evoluciones',
  templateUrl: './evoluciones.component.html',
  styleUrls: ['./evoluciones.component.css']
})
export class EvolucionesComponent implements OnInit {
  urlEvolucion:string="https://pokeapi.co/api/v2/evolution-chain?offset=0&limit=20";
  urlPokemon:string="https://pokeapi.co/api/v2/pokemon/";
  urlcon1:string="";
  urlcon2:string="";
  urlcon3:string="";
  evolucionEspecie: any;
  evolucionesURL: string[]=[];
  evoluciones: any[]=[];
  pokemon: any;
  pokemones: Pokemon[]=[]
  urlpokeite:string='';

  constructor(private pokemoservice:PokemonService) { }

  ngOnInit(): void {
    this.pokemoservice.getEspecies(this.urlEvolucion).subscribe(
      (data)=>{ 
        data.results.forEach((elemento:any) => {
          this.evolucionesURL.push(elemento.url)
        });
        for (let index = 0; index < this.evolucionesURL.length; index++) {
          this.urlpokeite=this.evolucionesURL[index];
          this.pintandoPokemones(this.urlpokeite);
          //console.log(this.urlpokeite);
        }
        
        console.log(this.pokemones);
      }
    );

  }

  pintandoPokemones(url:string){
    this.pokemoservice.getEspecies(url).subscribe(
      (data)=>{ 
        this.evolucionEspecie=new Evolucion();
        this.evolucionEspecie.setSpeciesName_e1(data.chain.species.name)
        data.chain.evolves_to.forEach((elemento:any) => {
          this.evolucionEspecie.setSpeciesName_e2(elemento.species.name)
          elemento.evolves_to.forEach((elemento:any) => {
            this.evolucionEspecie.setSpeciesName_e3(elemento.species.name)
          });
        });
        this.evoluciones.push(this.evolucionEspecie);
        for (let index = 0; index < this.evoluciones.length; index++) {
          this.capturaPokemon(this.evoluciones[index].species_name_e1);
          this.capturaPokemon(this.evoluciones[index].species_name_e2);
          this.capturaPokemon(this.evoluciones[index].species_name_e3);
          //console.log(this.urlpokeite);
        }
      }
    );
  }

  capturaPokemon(url:string){
    if(url!=null){
      this.pokemoservice.getEspecies(this.urlPokemon+url+"/").subscribe(
          (data)=>{
            this.pokemon=new Pokemon();
            this.pokemon.setName(data.name);
            this.pokemon.setFoto(data.sprites.front_default);
            this.pokemones.push(this.pokemon);
          }
      );
      console.log(this.urlPokemon+url);
    }
  }


}
