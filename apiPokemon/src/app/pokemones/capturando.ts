import { HabilidadesPokemon } from "./habilidades/habilidades-pokemon";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

export class Capturando {
    capturaPokemon(pokservice:PokemonService,urlpokTip:string,pokemon:Pokemon){
        pokservice.getEspecies(urlpokTip).subscribe(
            (data)=>{
              /**
               * Comenzamos a llenar el pokemon instanciado
               */
              pokemon.setName(data.name);
              pokemon.setFoto(data.sprites.front_default);
            }
          )
    }
}
