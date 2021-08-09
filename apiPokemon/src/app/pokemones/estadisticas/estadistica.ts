export class Estadistica {
    private name!: string;
    private base_stat!: number;

    /**
     * name
     */
    public setName(name: string) {
        this.name=name;
    }
    /**
     * getName
     */
    public getName() {
        return this.name;
    }

    /**
     * setBaseStat
     */
    public setBaseStat(stat: number) {
        this.base_stat=stat;
    }
    /**
     * getBaseStat
     */
    public getBaseStat() {
        return this.base_stat;
    }


}
