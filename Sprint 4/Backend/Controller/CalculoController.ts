import Router from "express";
import ParametrosModel from "../Models/Parametros";
import AeronaveModel from "../Models/AeronaveModel";
import { Identifier } from "sequelize";
import FlapModel from "../Models/FlapModel";
const CalculoController = Router();

CalculoController.post("/calcular" , async(req, res)=>{
    var dados = req.body
    console.log(dados)
    await FlapModel.findOne( { raw: true,
        where:{
        flap: dados.Flap,
        ice: dados.Ice,
        aeronaves: dados.Modelo,
        runway_condicion: dados.RunwayCondicion
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
   
  console.log("dadosssssssssssssssssssssssssss")
  console.log(dados)
    //PESO TONELADAS
    //ALTURA FEET
    //TEMPERATURA GRAUS
    //WIND KT (NÓS)
    //SLOPE PORCENTAGEM
    //REVERSOR UN
    var valorReferencia = dados.ref;
    var peso = 0;
    var altura = 0;
    var temp = 0;
    var wind = 0;
    var slope = 0
    var rev = 0;
    //1== internacional
    if(valores.UnitOfMeasurement == 1){
        
    }else{
        valores.Peso = valores.Peso/2.205;
       
    }
    
    if(referencia.unidade_de_medida == 1){
       
    }else{
        referencia.peso = referencia.peso/2.205;
        
    }


    //VALORES DE PESO
    if(valores.Peso > referencia.peso){
        peso = peso + (valores.Peso - referencia.peso) / referencia.peso_referencia * dados.above_weight;
    }else if(valores.Peso<referencia.peso){
        peso = peso + (referencia.peso - valores.Peso ) / referencia.peso_referencia * dados.below_weight;
    }
    //ALTURA
    altura = (dados.alt/referencia.altitude) * valores.Alt;
    //TEMPERATURA
    if(valores.Temp >referencia.isa ){
        temp = (dados.above_isa/referencia.temp_ref) * valores.Temp

    }else if(valores.Temp < referencia.isa){
        temp = (dados.below_isa/referencia.temp_ref) * valores.Temp
    }
    //1 == HEADWIND
    //1 == TALLWIND
    if(valores.LikeWind == 1){
        wind = (dados.head_wind/referencia.vento) * valores.Wind
    } 
    else if(valores.LikeWind == 2){
        wind = (dados.tall_wind/referencia.vento) * valores.Wind
    }

   
    if(referencia.slope==0){
        referencia.slope = 1
    }

    //1 == UPHILL
    //2 == DOWNHILL
    if(valores.LikeSlope==1){
        slope = (dados.up_hill/referencia.slope) * valores.Slope;
    }
    else if(valores.LikeSlope==2){
        slope = (dados.down_hill/referencia.slope) * valores.Slope;
    }
    //REVERSOR
    rev = dados.rev * valores.Rev

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
    
    // if(valores.UnitOfMeasurement == 2){
    //     resultado = resultado / 3.281
    // }
    
    return Math.floor(resultado);


}

export default CalculoController;