import { Component, OnInit } from '@angular/core';
import { HabilidadesPokemon } from './habilidades/habilidades-pokemon';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import { Estadistica } from './estadisticas/estadistica';
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  //variable de paginación
  public page!:number;
  /*-----------------------------*/
  //Url donde sacaremos la información de la api
  private urlEspecies: string='https://pokeapi.co/api/v2/pokemon?limit=140&offset=0';
  //instanciamos a un pokemon
  pokemon: Pokemon=new Pokemon();
  //Pasamos un atributo de tipo any ( para luego instanciarlo)
  habi: any;
  /*Pasamos un arreglo que recibe objetos de tipo any (puede ingresar cualquier objeto - 
  pero aquí entrara las habilidades luego instanciadas)*/
  habilidades: any[]=[];

  estadistica: any;
  estadisticas:any[]=[];

  //Nos muestra card;
  mostrar: boolean=false;

  //con esta variable pasaremos nuestra url para recuperar a los pokemones que mostraremos
  urlpokTip: string='';

  /*variable de tipo any ya que no tenemos conocimiento que data esta trayendo desde la api
  *pasamos un arreglo ya que nos esta trayendo un arreglo.
  */
  especies: any[]=[];
  //en nuestro constructor hacemos referencia a nuestro servicioPokemon
  constructor(private pokservice: PokemonService) { }

  ngOnInit(): void {
    /*ingresamos al metodo getEspecies para capturar todoas las especies de pokemones
     el metodo subscribe hace un seguimiento a la API por si esta realiza un cambio
    */

    this.pokservice.getEspecies(this.urlEspecies).subscribe(
      /*traemos data la cual es función y a la vez variable que trae con sigo results como parametro
       results es un parametro entregado por la API no se sabe de que tipo por eso es de Tipo Any especies
      */
      data=>{this.especies=data.results}
    );
  }

  /**
   * Este metodo nos mostrara el pokemon al que llamamos remplazando la url de entrada 
   */
  showPokemonEspecie(urlnew:string){
    //explicado más abajo
    this.reemplazandoHabilidades(this.habilidades.length,this.habilidades);
    this.reemplazandoHabilidades(this.estadisticas.length,this.estadisticas);
    //reemplazando la variable
    this.urlpokTip=urlnew;
    //accediendo a getEspecies mediante el servicio pero esta vez con otra url
    this.pokservice.getEspecies(this.urlpokTip).subscribe(
      (data)=>{
        /**
         * Comenzamos a llenar el pokemon instanciado
         */
        this.pokemon.setName(data.name);
        this.pokemon.setWeight(data.weight);
        this.pokemon.setBase_experience(data.base_experience);
        this.pokemon.setHeight(data.height);
        this.pokemon.setFoto(data.sprites.front_default);
        //recorriendo el array traido por la api para llenar un objeto en este caso habi(habilidadesPokemon)
        data.abilities.forEach((dato: any) => {
          this.habi=new HabilidadesPokemon();
          this.habi.setHabilidad(dato.ability.name);
          this.habi.setSlot(dato.slot);
          //llenamos el arreglo habilidades con una instancia de tipo habilidadesPokemon
          this.habilidades.push(this.habi);
          console.log(this.habilidades)
        });
        data.stats.forEach((dato: any) => {
          this.estadistica=new Estadistica();
          this.estadistica.setBaseStat(dato.base_stat)
          this.estadistica.setName(dato.stat.name);
          //llenamos el arreglo habilidades con una instancia de tipo habilidadesPokemon
          this.estadisticas.push(this.estadistica);
          console.log(this.estadisticas)
        });
      }
    )
    this.mostrar=true;
  }

  /*
   *Metodo creado para eliminar lo que tiene un arreglo y que este no creasca en cada llamado
   Recibe el tamaño del arreglo y el arreglo
   */
  reemplazandoHabilidades(size:number,array:any[]){
    
    for (let index = 0; index < size; index++) {
        array.pop()
    }
  }

  /**/


}
