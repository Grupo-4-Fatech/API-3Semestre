import e from "express";
import Router from "express";
import UsuarioModel from "../Models/UsuarioModel";


const UsuarioController = Router();


UsuarioController.post("/CadastrarUsuario", async (req, res)=>{
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok: false, 
            mensagem:"Please fill in the details to complete the registration."})
        
    }else{
        try{
             await UsuarioModel.create({
                 email: dados.email,
                 nome: dados.nome,
                 senha: dados.senha,
                 tipo_usuario : dados.tipoUsuario
             });
             res.json({
                ok: true, 
                mensagem:"User successfully registered."})
 
         }catch(error){
            if(error == "SequelizeUniqueConstraintError: Validation error"){
                res.json({
                    ok: false, 
                    mensagem:"E-mail already registered."})
            }else{
                res.json({
                    ok: false, 
                    mensagem:error})
            }
             
 
         }
    }
})

UsuarioController.patch("/AtualizarUsuario", async (req, res)=>{
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.json({
            ok: false, 
            mensagem:"Please fill in the data to update the registration."})
        
    }else{
        var email = dados.email;
        UsuarioModel.findByPk(email?.toString()).then(async (data)=>{
          if(data!= null){
            await UsuarioModel.update({
                    nome: dados.nome,
                    senha: dados.senha,
                    tipo_usuario : dados.tipoUsuario
                },{where:{
                email : dados.email,
                }});

            res.json({
                ok: true, 

                mensagem:"User successfully updated."})
          }else{
                res.json({
                    ok: false, 
                    mensagem:"User not found."})

            }
        })
       
    }
})

UsuarioController.get("/BuscarUsuario", async(req, res)=>{
    var email = req.query.email;
    
        await UsuarioModel.findByPk(email?.toString()).then((data)=>{
            res.json(data);
        })

   
    
   
})

UsuarioController.get("/ListarUsuarios", async(req,res)=>{
     await UsuarioModel.findAll({attributes: { exclude: ['senha', 'tipoUsuario'] }}).then((data)=>{
        res.json(data);
    });
   
})
UsuarioController.post("/DeletarUsuario", async(req,res)=>{
    var email = req.query.email;
    try{
        await UsuarioModel.destroy({where: {email:email}})
        res.json({ok:true})
    }catch(e){
        res.json({ok:false})

    }
   
    
   
})

export default UsuarioController;
