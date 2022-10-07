import Router from "express";
import UsuarioModel from "../Models/UsuarioModel";

const LoginController = Router();

LoginController.post('/Logar', async(req, res)=>{
    var dados = req.body;
    console.log(dados.emai)
    if(dados.email == "" || dados.senha==""){
        res.json({
            ok:false,
            Mensagem:"Please, enter with email and password."
        })
    }else{
        
            await UsuarioModel.findOne({where:{email :dados.email, senha:dados.senha }}).then((data)=>{
                if(data==null){
                    res.json({
                        ok:false,
                        usuario:data,
                        Mensagem:"Usuário ou Senha incorretos."
                    })
                }else{
                    res.json({ok:true, usuario : data, Mensagem:"Sucesso"})
                }
            });
       
    }

   
        
            
        
})

export default LoginController;