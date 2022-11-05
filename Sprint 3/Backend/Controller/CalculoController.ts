import Router from "express";
import ParametrosModel from "../Models/Parametros";
import AeronaveModel from "../Models/AeronaveModel";
import { Identifier } from "sequelize";
const CalculoController = Router();

CalculoController.post("/calcular" , async(req, res)=>{
    var dados = req.body
    console.log(dados)
    await ParametrosModel.findOne( { raw: true,
        where:{
        Flap: dados.Flap,
        Ice: dados.Ice,
        RunwayCondicion: dados.RunwayCondicion
    }}).then(async (data)=>{
        await AeronaveModel.findOne( { raw: true,where:{modelo_de_aeronave: dados.Modelo}}).then((dat)=>{
            var calculo = calcular(data, dados, dat)
            console.log("resultado do calculo")
            console.log(calculo)
            res.json(calculo)
    
    })
       
       
    })
    
    
});


var calcular = function(dados: any, valores:any , referencia:any):number{
   
  
    //PESO TONELADAS
    //ALTURA FEET
    //TEMPERATURA GRAUS
    //WIND KT (NÓS)
    //SLOPE PORCENTAGEM
    //REVERSOR UN
    var valorReferencia = dados.Ref;
    var peso = 0;
    var altura = 0;
    var temp = 0;
    var wind = 0;
    var slope = 0
    var rev = 0;
    //1== internacional
    if(valores.UnitOfMeasurement == 1){
        valores.Wind = valores.Wind/1.852;
        valores.Alt = valores.Alt*3.281;
    }else{
        valores.Peso = valores.Peso/2205;
        valores.Temp = (valores.Temp - 32)*(5/9);
    }
    
    if(referencia.unidade_de_medida == 1){
        referencia.vento = referencia.vento/1.852;
        referencia.altitude = referencia.altitude*3.281;
    }else{
        referencia.peso = referencia.peso/2205;
        referencia.isa = (referencia.isa - 32)*(5/9);
    }


    //VALORES DE PESO
    if(valores.Peso > referencia.peso){
        peso = peso + (valores.Peso - referencia.peso_referencia) * dados.AboveWeight;
    }else if(valores.Peso<referencia.peso){
        peso = peso + (referencia.peso_referencia - valores.Peso ) * dados.BelowWeight;
    }
    //ALTURA
    altura = (dados.Alt/referencia.altitude) * valores.Alt;
    //TEMPERATURA
    if(valores.Temp >referencia.isa ){
        temp = (dados.AboveISA/referencia.temp_ref) * valores.Temp

    }else if(valores.Temp < referencia.isa){
        temp = (dados.BelowISA/referencia.temp_ref) * valores.Temp
    }
    //1 == HEADWIND
    //1 == TALLWIND
    if(valores.LikeWind == 1){
        wind = (dados.HeadWind/referencia.vento) * valores.Wind
    } 
    else if(valores.LikeWind == 2){
        wind = (dados.TallWind/referencia.vento) * valores.Wind
    }

   
    if(referencia.slope==0){
        referencia.slope = 1
    }

    //1 == UPHILL
    //2 == DOWNHILL
    if(valores.LikeSlope==1){
        slope = (dados.UpHill/referencia.slope) * valores.Slope;
    }
    else if(valores.LikeSlope==2){
        slope = (dados.DownHill/referencia.slope) * valores.Slope;
    }
    //REVERSOR
    rev = dados.Rev * valores.Rev

    //RESPOTA EM METROS
    console.log(dados)
    console.log(valores)
    console.log(referencia)
    console.log(valorReferencia)
    console.log("Peso: "+  peso)
    console.log("Altura "+ altura)
    console.log("Temperatura " + temp)
    console.log("Vento "+ wind)
    console.log("Slop"+ slope)
    console.log("Reversor " +rev)
    let resultado:number = valorReferencia + peso + altura + temp + wind + slope + rev
    
    if(valores.UnitOfMeasurement == 2){
        resultado = resultado*3.281
    }
    
    
    return Math.floor(resultado);


}

export default CalculoController;