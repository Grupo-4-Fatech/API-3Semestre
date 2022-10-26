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
                motor: dados.motor,
                certificacao: dados.certificacao,
                landing_flap: dados.landing_flap,
                reversor:parseInt(dados.reversor),
                peso:parseInt(dados.peso),
                peso_max:parseInt(dados.peso_max),
                peso_min:parseInt(dados.peso_min),
                owerweight:parseInt(dados.owerweight),
                overspeed_max:parseInt(dados.overspeed_max),
                overspeed_min:parseInt(dados.overspeed_min),
                vento_max:parseInt(dados.vento_max),
                vento_min:parseInt(dados.vento_min),
                isa_max:parseInt(dados.isa_max),
                isa_min:parseInt(dados.isa_min)

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
                        motor: dados.motor,
                        certificacao: dados.certificacao,
                        landing_flap: dados.landing_flap,
                        reversor: dados.reversor,
                        peso: dados.peso,
                        peso_max: dados.peso_max,
                        peso_min: dados.peso_min,
                        owerweight: dados.owerweight,
                        overspeed_max: dados.overspeed_max,
                        overspeed_min: dados.overspeed_min,
                        vento_max: dados.vento_max,
                        vento_min: dados.vento_min,
                        isa_max: dados.isa_max,
                        isa_min: dados.isa_min

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
    await AeronaveModel.findAll({attributes: {exclude:['motor','certificacao','landing_flap','reversor','peso','peso_max','peso_min','owerweight','overspeed_max','overspeed_min','vento_max','vento_min','isa_max','isa_min']}}).then((data)=>{
        res.json(data)
    })
    
})

AeronaveController.delete("/DeletarAeronave",async (req, res) => {
    var modelo_de_aeronave = req.query.modelo_de_aeronave
    await AeronaveModel.destroy({where:{modelo_de_aeronave:modelo_de_aeronave}}).then((data)=>{

    })
    
})

export default AeronaveController
