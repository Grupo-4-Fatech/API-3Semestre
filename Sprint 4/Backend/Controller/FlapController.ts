import { Router } from "express";
import FlapModel from "../Models/FlapModel";


const FlapController = Router()

FlapController.post("/CadastrarFlap", async (req, res) => {
    var dadosFlap = req.body;
    console.log(dadosFlap)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        })


    } else {
        try {
            dadosFlap.forEach(async (dados: any) => {
                console.log("entrou");

                await FlapModel.create({
                    aeronaves: dados.aeronaves,
                    udm: parseInt(dados.udm),
                    flap: dados.flap,
                    ice: parseInt(dados.ice),
                    runway_condicion: parseInt(dados.runway_condicion),
                    ref: parseInt(dados.ref),
                    below_weight: parseInt(dados.below_weight),
                    above_weight: parseInt(dados.above_weight),
                    alt: parseInt(dados.alt),
                    below_isa: parseInt(dados.below_isa),
                    above_isa: parseInt(dados.above_isa),
                    head_wind: parseInt(dados.head_wind),
                    tall_wind: parseInt(dados.tall_wind),
                    up_hill: parseInt(dados.up_hill),
                    down_hill: parseInt(dados.down_hill),
                    vap: parseInt(dados.vap),
                    rev: parseInt(dados.rev)

                })

            })
            res.json({
                ok: true,
                mensagem: "Flap cadastrado com sucesso."
            })

        } catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                res.json({
                    ok: false,
                    mensagem: "Flap já cadastrado."
                })
            } else {
                res.json({
                    ok: false,
                    mensagem: error
                })
            }
        }
    }
})

FlapController.patch("/AtualizarFlap", async (req, res) => {
    var dadosFlap = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        })
    } else {
        dadosFlap.forEach( (dados: any) => {
        var Id = dados.Id;
        FlapModel.findByPk(Id?.toString()).then(async (data) => {

            
            if (data != null) {
                
                await FlapModel.update({
                    aeronaves: dados.aeronaves,
                    udm: dados.udm,
                    flap: dados.flap,
                    ice: dados.ice,
                    runway_condicion: dados.runway_condicion,
                    ref: dados.ref,
                    below_weight: dados.below_weight,
                    above_weight: dados.above_weight,
                    alt: dados.alt,
                    below_isa: dados.below_isa,
                    above_isa: dados.above_isa,
                    head_wind: dados.head_wind,
                    tall_wind: dados.tall_wind,
                    up_hill: dados.up_hill,
                    down_hill: dados.down_hill,
                    vap: dados.vap,
                    rev: dados.rev

                }, {
                    where: {
                        Id: dados.Id
                    }
                })
 

                res.json({
                    ok: true,
                    mensagem: "Flap atualizado com sucesso"
                })
            } else {
                res.json({
                    ok: false,
                    mensagem: "Flap não encontrado"
                })
            }
        })
        })
    }


})

FlapController.get("/BuscarFlap", async (req, res) => {
    var Id = req.query.Id;
    FlapModel.findByPk(Id?.toString()).then((data) => {
        res.json(data)
    })
})

FlapController.get("/ListarFlap", async (req, res) => {
    await FlapModel.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data)
    })

})

FlapController.delete("/DeletarFlap", async (req, res) => {
    var Id = req.query.Id
    await FlapModel.destroy({ where: { Id: Id } }).then((data) => {

    })

})

export default FlapController;
