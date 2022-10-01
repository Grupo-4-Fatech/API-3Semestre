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
                peso:parseInt(dados.peso),
                reversor:parseInt(dados.reversor)
                // overspeed: dados.overspeed,
                // flap_de_pouso: dados.flap_de_pouso
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
                        peso: dados.peso,
                        reversor: dados.reversor
                        // overspeed: dados.overspeed,
                        // flap_de_pouso: dados.flap_de_pouso
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

AeronaveController.get("ListarAeronave",async (req,res) => {
    await AeronaveModel.findAll().then((data)=>{
        res.json(data)
    })
    
})

AeronaveController.delete("/DeletarAeronave",async (req, res) => {
    var modelo_de_aeronave = req.query.modelo_de_aeronave
    await AeronaveModel.destroy({where:{modelo_de_aeronave:modelo_de_aeronave}}).then((data)=>{

    })
    
})

export default AeronaveController
