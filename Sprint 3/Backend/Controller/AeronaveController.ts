import { Router } from "express";
import AeronaveModel from "../Models/AeronaveModel";

const AeronaveController = Router()

AeronaveController.post("/CadastrarAeronave", async(req, res)=>{
    var dados = req.body;
    console.log(dados)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok: false,
            mensagem:"Por favor, preencha os dados para realizar o cadastro."})


    }else{
        try{
            await AeronaveModel.create({
                modelo_de_aeronave: dados.modelo_de_aeronave,
                unidade_de_medida:dados.unidade_de_medida,
                certificacao: dados.certificacao,
                motor: dados.motor,
                peso:parseInt(dados.peso),
                reversor:parseInt(dados.reversor),
                landing_flap: dados.landing_flap,
                peso_referencia:parseInt(dados.peso_referencia),
                altitude:parseInt(dados.altitude),
                isa:parseInt(dados.isa),
                vento:parseInt(dados.vento),
                peso_max:parseInt(dados.peso_max),
                peso_min:parseInt(dados.peso_min),
                owerweight:parseInt(dados.owerweight),
                overspeed:parseInt(dados.overspeed),
                slope:parseFloat(dados.slope),
                temp_ref:parseInt(dados.temp_ref)

             })
             res.json({
                ok:true,
                mensagem:"Aeronave cadastrada com sucesso."})              
            
            }catch(error){if(error == "SequelizeUniqueConstraintError: Validation error"){
                    res.json({
                        ok:false,
                        mensagem:"Aeronave já cadastrada."})
                    }else{
                        res.json({
                            ok:false,
                            mensagem:error})
                        }
                 }
        }
})

AeronaveController.patch("/AtualizarAeronave", async(req, res)=>{
    var dados = req.body;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok:false,
            mensagem:"Por favor, preencha os dados para atualizar o cadastro."})
        }else{
            var modelo_de_aeronave = dados.modelo_de_aeronave;
            AeronaveModel.findByPk(modelo_de_aeronave?.toString()).then(async(data)=>{
                if(data!= null){
                    await AeronaveModel.update({
                        modelo_de_aeronave: dados.modelo_de_aeronave,
                        unidade_de_medida:dados.unidade_de_medida,
                        certificacao: dados.certificacao,
                        motor: dados.motor,
                        peso:dados.peso,
                        reversor:dados.reversor,
                        landing_flap: dados.landing_flap,
                        peso_referencia:dados.peso_referencia,
                        altitude:dados.altitude,
                        isa:dados.isa,
                        vento:dados.vento,
                        peso_max:dados.peso_max,
                        peso_min:dados.peso_min,
                        owerweight:dados.owerweight,
                        overspeed:dados.overspeed,
                        slope:dados.slope,
                        temp_ref:dados.temp_ref

                    },{where:{
                        modelo_de_aeronave: dados.modelo_de_aeronave
                    }})

                    res.json({
                        ok:true,
                        mensagem:"Aeronave atualizada com sucesso"})
                    }else{
                        res.json({
                            ok:false,
                            mensagem:"Aeronave não encontrada"})
                    }
            })
        }


    })

AeronaveController.get("/BuscarAeronave", async(req,res)=>{
    var modelo_de_aeronave = req.query.modelo_de_aeronave;
    AeronaveModel.findByPk(modelo_de_aeronave?.toString()).then((data)=>{
        res.json(data)
    })
})

AeronaveController.get("/ListarAeronave",async (req,res) => {
    await AeronaveModel.findAll({attributes: {exclude:['unidade_de_medida','certificacao','motor','peso','reversor','landing_flap','peso_referencia','altitude','isa','vento','peso_max','peso_min','owerweight','overspeed','slope','temp_ref']}}).then((data)=>{
        res.json(data)
    })
    
})

AeronaveController.delete("/DeletarAeronave",async (req, res) => {
    var modelo_de_aeronave = req.query.modelo_de_aeronave
    await AeronaveModel.destroy({where:{modelo_de_aeronave:modelo_de_aeronave}}).then((data)=>{

    })
    
})

export default AeronaveController
