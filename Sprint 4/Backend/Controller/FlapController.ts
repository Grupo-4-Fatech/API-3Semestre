import { Router } from "express";
import FlapModel from "../Models/FlapModel";
import FlapsModel from "../Models/FlapsModel";


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

            var sucesso = await FlapsModel.create({

                flap: dadosFlap[0].flap,
                aeronave: dadosFlap[0].aeronaves
            })
            if (sucesso) {
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

            }
            res.json({
                ok: true,
                mensagem: "Flap cadastrado com sucesso."
            })

        } catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                console.log(error)
                res.json({
                    ok: false,
                    mensagem: "Flap já cadastrado."
                })
            } else {
                console.log(error)
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
        try {
            await FlapsModel.update({
                id: dadosFlap[0].id,
                flap: dadosFlap[0].flap,
                aeronave: dadosFlap[0].aeronave


            }, {
                where: {
                    id: dadosFlap[0].id
                }


            })
            dadosFlap.forEach(async (dados: any) => {

                var id = dados.id;


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
                        aeronaves: dados.aeronaves, flap: dados.flap, runway_condicion: dados.runway_condicion
                    }
                })





            })
            res.json({
                ok: true,
                mensagem: "Flap atualizado com sucesso"
            })
        } catch (e) {
            res.json({
                ok: false,
                mensagem: "Flap nao encontrado"
            })
        }
    }

})

FlapController.get("/BuscarFlap", async (req, res) => {
    var id = req.query.id;
    FlapModel.findByPk(id?.toString()).then((data: any) => {
        res.json(data)
    })
})
FlapController.get("/BuscarFlapParametros", async (req, res) => {
    var id = req.query.id;
    console.log(id)
    FlapsModel.findByPk(id?.toString()).then((data: any) => {
        console.log(data)
        FlapModel.findAll({ where: { flap: data.flap, aeronaves: data.aeronave,ice: 1} }).then((dados) => {
            res.json(dados)
        })

    })
})

FlapController.get("/BuscarFlapParametros2", async (req, res) => {
    var id = req.query.id;
    console.log(id)
    FlapsModel.findByPk(id?.toString()).then((data: any) => {
        console.log(data)
        FlapModel.findAll({ where: { flap: data.flap, aeronaves: data.aeronave,ice: 2} }).then((dados) => {
            res.json(dados)
        })

    })
})



FlapController.get("/ListarFlap", async (req, res) => {
    await FlapsModel.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data)
    })

})

FlapController.delete("/DeletarFlapParametros", async (req, res) => {
    var flap = req.query.flap
    await FlapModel.destroy({ where: { flap: flap } }).then((data) => {



    })

})

export default FlapController;
