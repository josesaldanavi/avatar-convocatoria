import { Component, OnInit } from '@angular/core';
import { HabilidadesPokemon } from './habilidades/habilidades-pokemon';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  private urlEspecies: string='https://pokeapi.co/api/v2/pokemon/';
  pokemon: Pokemon=new Pokemon();
  habi: any;
  habilidades: any[]=[];


  mostrar: boolean=false;
  urlpokTip: string='';
  especies: any[]=[];
  constructor(private pokservice: PokemonService) { }

  ngOnInit(): void {
    this.pokservice.getEspecies(this.urlEspecies).subscribe(
      data=>{this.especies=data.results}
    );
  }

  showPokemonEspecie(urlnew:string){
    this.reemplazandoHabilidades(this.habilidades.length,this.habilidades);
    this.urlpokTip=urlnew;
    this.pokservice.getEspecies(this.urlpokTip).subscribe(
      (data)=>{
        this.pokemon.setName(data.name);
        this.pokemon.setWeight(data.weight);
        this.pokemon.setBase_experience(data.base_experience);
        this.pokemon.setHeight(data.height);
        this.pokemon.setFoto(data.sprites.front_default);
        data.abilities.forEach((dato: any) => {
          this.habi=new HabilidadesPokemon();
          this.habi.setHabilidad(dato.ability.name);
          this.habi.setSlot(dato.slot);
          this.habilidades.push(this.habi);
          console.log(this.habilidades)
        });
      }
    )
    this.mostrar=true;
  }

  reemplazandoHabilidades(size:number,array:any[]){
    
    for (let index = 0; index < size; index++) {
        array.pop()
    }
  }

  /**/


}
