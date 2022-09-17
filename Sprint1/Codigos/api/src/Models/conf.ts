import Conexao from "../Connection/conexao";

export default class Conf{
    private id!: number
    private brk_conf!: number
    private ref!: number
    private weight_below!: number
    private weight_above!: number
    private spd!: number
    private alt!: number
    private wind!: number
    private temp!: number
    private slope!: number
    private rev!: number

    get obterId(){
        return this.id
    }
    get obterBrk_conf(){
        return this.brk_conf
    }
    get obterRef(){
        return this.ref
    }
    get obterWeight_below(){
        return this.weight_below
    }
    get obterWeight_above(){
        return this.weight_above
    }
    get obterSpd(){
        return this.spd
    }
    get obterAlt(){
        return this.alt
    } 
    get obterWind(){
        return this.wind
    }
    get obterTemp(){
        return this.temp
    }
    get obterSlope(){
        return this.slope
    }
    get obterRev(){
        return this.rev
    }
}