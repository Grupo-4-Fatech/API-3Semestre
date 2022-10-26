import React from 'react';
import CrudAer from '../../componentes/Read-Delect-Update-Aer/crudAer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
const Swal = require('sweetalert2')

const ConsDelAer = () => {
    var dados = [{
        MODEL:"",
        // ENGINE:"",
        // CERTIFICATION:"",
        // WEIGHT:"",
        // REVERSER:""
      }];
    const [aeronaves, setAeronaves] = useState(dados);
    useEffect(() => {
      setTimeout(() => {
        fetch("/ListarAeronave", {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          
        }).then((resposta) => resposta.json()).then((data) => {
         
          setAeronaves(data)
            
          });
      }, 1000);
    });
    const deletarAeronave = function (e){
      e.preventDefault();
    
      fetch("/DeletarAeronave" +"?modelo_de_aeronave=" + e.target.closest('tr').id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        
      }).then((resposta) => resposta.json()).then((data) => {
      
        
          Swal.fire({
            icon: data.ok? 'success': 'error',
            title: data.ok? 'SUCCESS': 'ERROR',
            text: data.ok? 'User deleted successfuly': 'Error deleting the user',
        })
        
        
      });
    }
    const editarAeronave = function (e){
      e.preventDefault();
     window.location.href = "/Alterar-aeronave/:Modelo_de_aeronave=" + e.target.closest('tr').id;
    
    }
    
        return (  
            <div className=" container" >
                <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className="titulo">Consult and Delete</div>
                <form action="#">
                    <div className="cadastro-aeronave">
                        <CrudAer dados={aeronaves} deletar={deletarAeronave} editar={editarAeronave}></CrudAer>
                    </div>
    
                </form>
    
            </div>
         );    
    
        

}

export default ConsDelAer;

