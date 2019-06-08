export class City{
    name:string;
    base:string;
    clouds:object;
    cod:number;
    coord:object;
    dt:number;
    id:number;
    main: object;
    sys: object;
    timezone: number;
    visibility: number;
    weather: [];
    wind:object;

    constructor(){
        // initalize the object with temp values...
        this.name = "Loading...";
        this.base = "";
        this.clouds = {};
        this.cod = 0;
        this.coord  = {};
        this.dt  = 0;
        this.id = 0;
        this.main = {};
        this.sys  = {};
        this.timezone = 0;
        this. visibility = 0;
        this.weather = [];
        this.wind = {};
    
    }
}