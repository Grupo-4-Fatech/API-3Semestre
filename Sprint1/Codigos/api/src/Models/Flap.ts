import Conexao from "../Connection/conexao";

export default class Flap{
    private id: number
    private brk_conf: number
    ref: number 
    weight_below: number
    alt: number
    temp_below: number
    temp_above: number
    wind_head: number
    wind_tail: number
    slope_uphill: number
    slope_downhill: number
    vap: number
    rev: number

    constructor(id: number, brk_conf: number, ref: number, weight_below: number, alt: number, temp_below: number, temp_above: number, wind_head: number, wind_tail: number, slope_uphill: number, slope_downhill: number, vap: number, rev: number){
        this.id = id
        this.brk_conf = brk_conf
        this.ref = ref
        this.weight_below = weight_below
        this.alt = alt
        this.temp_below = temp_below
        this.temp_above = temp_above
        this.wind_head = wind_head
        this.wind_tail = wind_tail
        this.slope_uphill = slope_uphill
        this.slope_downhill = slope_downhill
        this.vap = vap
        this.rev = rev
    }
    getId = ()=>{
        return this.id
    }
    getBrk_conf = ()=>{
        return this.brk_conf
    }

}