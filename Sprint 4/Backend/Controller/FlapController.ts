import { Router } from "express";
import FlapModel from "../Models/FlapModel";


const FlapController = Router()

FlapController.post("/CadastrarFlap", async (req, res) => {
    var dados = req.body;
    console.log(dados)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        })


    } else {
        try {
            await FlapModel.create({
                Id: parseInt(dados.Id),
                aeronaves: dados.aeronaves,
                Udm: parseInt(dados.Udm),
                Flap: parseInt(dados.Flap),
                Ice: parseInt(dados.Ice),
                RunwayCondicion: parseInt(dados.RunwayCondicion),
                Ref: parseInt(dados.Ref),
                BelowWeight: parseInt(dados.BelowWeight),
                AboveWeight: parseInt(dados.AboveWeight),
                Alt: parseInt(dados.Alt),
                BelowISA: parseInt(dados.BelowISA),
                AboveISA: parseInt(dados.AboveISA),
                HeadWind: parseInt(dados.HeadWind),
                TallWind: parseInt(dados.TallWind),
                UpHill: parseInt(dados.UpHill),
                DownHill: parseInt(dados.DownHill),
                Vap: parseInt(dados.Vap),
                rev: parseInt(dados.Rev)


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
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        })
    } else {
        var Id = dados.Id;
        FlapModel.findByPk(Id?.toString()).then(async (data) => {
            if (data != null) {
                await FlapModel.update({
                    aeronaves: dados.aeronaves,
                    Udm: dados.Udm,
                    Flap: dados.Flap,
                    Ice: dados.Ice,
                    RunwayCondicion: dados.RunwayCondicion,
                    Ref: dados.Ref,
                    BelowWeight: dados.BelowWeight,
                    AboveWeight: dados.AboveWeight,
                    Alt: dados.Alt,
                    BelowISA: dados.BelowISA,
                    AboveISA: dados.AboveISA,
                    HeadWind: dados.HeadWind,
                    TallWind: dados.TallWind,
                    UpHill: dados.UpHill,
                    DownHill: dados.DownHill,
                    Vap: dados.Vap,
                    rev: dados.Rev

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
