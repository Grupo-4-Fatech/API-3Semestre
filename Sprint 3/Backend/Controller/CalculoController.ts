import Router from "express";
import ParametrosModel from "../Models/Parametros";
const CalculoController = Router();

CalculoController.post("/calcular" , async(req, res)=>{
    var dados = req.body
    console.log(dados)
    await ParametrosModel.findOne( { raw: true,
        where:{
        Flap: dados.Flap,
        Ice: dados.Ice,
        RunwayCondicion: dados.RunwayCondicion
    }}).then((data)=>{
        var valor = {
            Peso: 20,
            Alt:1800,
            LikeWind:2,
            Wind:2,
            Temp:24,
            LikeSlope: 2,
            Slope:0.1,
            Rev:1

        };
        res.json( calcular(data,dados));
    })
    
    
});

var calcular = function(dados: any, valores:any ){
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
        valores.Wind = valores.Wind/1852;
        valores.Alt = valores.Alt*3.281;
    }else{
        valores.Peso = valores.Peso/2205;
        valores.Temp = (valores.Temp - 32)*(5/9);


    }
    //VALORES DE PESO
    if(valores.Peso > 18){
        peso = peso + (valores.Peso - 18) * dados.AboveWeight;
    }else if(valores.Peso<18){
        peso = peso + (18 - valores.Peso ) * dados.BelowWeight;
    }
    //ALTURA
    altura = (dados.Alt/1000) * valores.Alt;
    //TEMPERATURA
    if(valores.Temp >15 ){
        temp = (dados.AboveISA/5) * valores.Temp

    }else if(valores.Temp < 15){
        temp = (dados.BelowISA/5) * valores.Temp
    }
    //1 == HEADWIND
    //1 == TALLWIND
    if(valores.LikeWind == 1){
        wind = (dados.HeadWind/5) * valores.Wind
    } 
    else if(valores.LikeWind == 2){
        wind = (dados.TallWind/5) * valores.Wind
    }

    //1 == UPHILL
    //2 == DOWNHILL
    if(valores.LikeSlope==1){
        slope = dados.UpHill * valores.Slope;
    }
    else if(valores.LikeSlope==2){
        slope = dados.DownHill * valores.Slope;
    }
    //REVERSOR
    rev = dados.Rev * valores.Rev

    //RESPOTA EM METROS
    var resultado = valorReferencia + peso + altura + temp + wind + slope + rev
    if(valores.UnitOfMeasurement == 2){
        resultado = resultado*3.281
    }
    
    return resultado;


}

export default CalculoController;