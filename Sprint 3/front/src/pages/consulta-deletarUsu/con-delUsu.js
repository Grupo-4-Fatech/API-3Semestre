import React from 'react';
import CrudUsu from "../../componentes/Read-Delect-Update/crudUsu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
const Swal = require('sweetalert2')


const ConsDelUsu = () => {

  var dados = [{
    NAME: "",
    EMAIL: "",
    USER: ""
  }];
  const [usuarios, setUsuarios] = useState(dados);
  useEffect(() => {
    setTimeout(() => {
      fetch("/ListarUsuarios", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },

      }).then((resposta) => resposta.json()).then((data) => {

        setUsuarios(data)

      });
    }, 1000);
  });
  const deletarUsuario = function (e) {
    e.preventDefault();

    fetch("/DeletarUsuario" + "?email=" + e.target.closest('tr').id, {
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
  const editarUsuario = function (e) {
    e.preventDefault();
    window.location.href = "/Alterar-usuario/:Email=" + e.target.closest('tr').id;

  }

  return (
    <div className=" container" >
      <FontAwesomeIcon icon={faRightFromBracket} />
      <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <div className="titulo">Consult</div>
      <form action="#">
        <div className="cadastro-aeronave">
          <CrudUsu dados={usuarios} deletar={deletarUsuario} editar={editarUsuario}></CrudUsu>
        </div>

      </form>

    </div>
  );


}

export default ConsDelUsu;