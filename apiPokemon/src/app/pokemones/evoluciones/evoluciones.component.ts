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
  urlcon1:string='';
  urlcon2:string='';
  urlcon3:string="";
  evolucionEspecie: any;
  evolucionesURL: string[]=[];
  evoluciones: Evolucion[]=[];
  pokemon: any;
  pokemones: Pokemon[]=[]
  pokemones2: Pokemon[]=[]
  pokemones3: Pokemon[]=[]
  urlpokeite:string='';

  constructor(private pokemoservice:PokemonService) { }

  ngOnInit(): void {
    this.pokemoservice.getEspecies(this.urlEvolucion).subscribe(
      (data)=>{ 
        data.results.forEach((elemento:any) => {
          this.evolucionesURL.push(elemento.url)
        });
        this.pintandoPokemones();
 
        console.log(this.pokemones);
        
      }
    );

  }

  pintandoPokemones(){
    
    for (let index = 0; index < this.evolucionesURL.length; index++) {
          
        this.pokemoservice.getEspecies(this.evolucionesURL[index]).subscribe(
          (data)=>{ 
            this.evolucionEspecie=new Evolucion();
            this.evolucionEspecie.setSpeciesName_e1(data.chain.species.name)
            data.chain.evolves_to.forEach((elemento:any) => {
              this.evolucionEspecie.setSpeciesName_e2(elemento.species.name)
              elemento.evolves_to.forEach((elemento:any) => {
                this.evolucionEspecie.setSpeciesName_e3(elemento.species.name)
              });
            });
            //this.evoluciones.push(this.evolucionEspecie);
            this.capturaPokemonEv1(this.evolucionEspecie.getSpeciesName_e1())
            this.capturaPokemonEv2(this.evolucionEspecie.getSpeciesName_e2())
            this.capturaPokemonEv3(this.evolucionEspecie.getSpeciesName_e3())
          }
        );
      //console.log(this.urlpokeite);
    }
  }
  capturaPokemonEv1(url :string){
    this.pokemoservice.getEspecies(this.urlPokemon+url+"/").subscribe(
      (data)=>{
        this.pokemon=new Pokemon();
        this.pokemon.setName(data.name);
        this.pokemon.setFoto(data.sprites.front_default);
        this.pokemones.push(this.pokemon);
      }
    );

  }
  capturaPokemonEv2(url :string){
    this.pokemoservice.getEspecies(this.urlPokemon+url+"/").subscribe(
      (data)=>{
        this.pokemon=new Pokemon();
        this.pokemon.setName(data.name);
        this.pokemon.setFoto(data.sprites.front_default);
        this.pokemones2.push(this.pokemon);
      }
    );

  }capturaPokemonEv3(url :string){
    this.pokemoservice.getEspecies(this.urlPokemon+url+"/").subscribe(
      (data)=>{
        this.pokemon=new Pokemon();
        this.pokemon.setName(data.name);
        this.pokemon.setFoto(data.sprites.front_default);
        this.pokemones3.push(this.pokemon);
      }
    );

  }

}
