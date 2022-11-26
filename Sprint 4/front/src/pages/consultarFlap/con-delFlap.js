import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import Logout from '../../componentes/logout/logout';
import CrudFlap from '../../componentes/Read-Delect-Update-Flap/crudFlap';
const Swal = require('sweetalert2')

const ConsDelFlap = () => {
        var dados = [{
          
          AERONAVES: "",
          FLAP: "",
          ICE: "",
        }];
        const [flaps, setFlaps] = useState(dados);
        useEffect(() => {
          setTimeout(() => {
            fetch("/ListarFlap", {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
      
            }).then((resposta) => resposta.json()).then((data) => {
                console.log(data)
                if(data == null || data.length == 0){

                }else{
                  setFlaps(data)
                }
              
      
            });
          }, 1000);
        });
        const deletarFlap = function (e) {
          e.preventDefault();
      
          fetch("/DeletarFlaps" + "?id=" + e.target.closest('tr').id, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
      
          }).then((resposta) => resposta.json()).then((data) => {
      
      
            Swal.fire({
              icon: data.ok ? 'success' : 'error',
              title: data.ok ? 'SUCCESS' : 'ERROR',
              text: data.ok ? 'User deleted successfuly' : 'Error deleting the user',
            })
      
      
          });
        }

        const editarFlap = function (e) {
          e.preventDefault();
          window.location.href = "/Alterar-flap/:id=" + e.target.closest('tr').id;
      
        }

      //  deletar={deletarFlap} editar={editarFlap}
      
    
    return (
        <div className="container" >

            <Logout></Logout>

            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>

            <div className="titulo">Consult</div>

            <form action="#">

                <div className="detalhes">

                 <CrudFlap dados={flaps} deletar={deletarFlap} editar={editarFlap}></CrudFlap>

                </div>

            </form>

        </div>
    )
}
export default ConsDelFlap;