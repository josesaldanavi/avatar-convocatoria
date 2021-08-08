export class HabilidadesPokemon {
    private habilidad: string='';
    private slot: number=0;

    public setHabilidad(habilidad: string) {
        this.habilidad=habilidad;
    }
    public getHabilidad() {
        return this.habilidad;
    }

    public setSlot(slot: number) {
        this.slot=slot;
    }
    
    public getSlot() {
        return this.slot;
    }
}
