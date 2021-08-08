import { newArray } from "@angular/compiler/src/util";
import { HabilidadesPokemon } from "./habilidades/habilidades-pokemon";

export class Pokemon{
    private base_experience: number=0;
    private name: string='';
    private height: number=0;
    private weight: number=0;
    private foto: string='';

    public setName(name:string) {
        this.name=name;
    }
    public getName() {
        return this.name;
    }

    public setBase_experience(base_experience:number) {
        this.base_experience=base_experience;
    }
    public getBase_experience() {
        return this.base_experience;
    }

    public setHeight(height:number) {
        this.height=height;
    }
    public getHeight() {
        return this.height;
    }

    public setWeight(weight:number) {
        this.weight=weight;
    }
    public getWeight() {
        return this.weight;
    }
    public setFoto(foto:string) {
        this.foto=foto;
    }
    public getFoto() {
        return this.foto;
    }
    

}
