import { Router } from "express";
import FlapsModel from "../Models/FlapsModel";



const FlapsController = Router()

FlapsController.post("/CadastrarFlaps", async (req, res) => {
    var dados = req.body;
    console.log(dados)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        })

    } else {
        try {
            await FlapsModel.create({
                flap: dados.flap,
                aeronave: dados.aeronave


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

FlapsController.patch("/AtualizarFlaps", async (req, res) => {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        })
    } else {
        var id = dados.id;
        FlapsModel.findByPk(id?.toString()).then(async (data) => {
            if (data != null) {
                await FlapsModel.update({
                    flap: dados.flap,
                    aeronave: dados.aeronave

                }, {
                    where: {
                        id: dados.id
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
    }


})

FlapsController.get("/BuscarFlaps", async (req, res) => {
    var id = req.query.id;
    FlapsModel.findByPk(id?.toString()).then((data) => {
        res.json(data)
    })
})

FlapsController.get("/ListarFlaps", async (req, res) => {
    await FlapsModel.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data)
    })

})

FlapsController.post("/DeletarFlaps", async (req, res) => {
    var id = req.query.id
    await FlapsModel.destroy({ where: { id: id } }).then((data) => {

    })

})

export default FlapsController;