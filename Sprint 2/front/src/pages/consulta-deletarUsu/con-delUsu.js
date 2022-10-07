import CrudUsu from "../../componentes/Read-Delect-Update/crudUsu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";



const ConsDelUsu =  () => {
  
var dados = [{
    NAME:"",
    EMAIL:"",
    USER:""
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
const deletarUsuario = function (e){
  e.preventDefault();

  fetch("/DeletarUsuario" +"?email=" + e.target.closest('tr').id, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    // body: JSON.stringify({email: e.target.closest('tr').id})
    
  }).then((resposta) => resposta.json()).then((data) => {
  
    if(data){
      Window.location.reload();
  
    }
    
  });
}

    return (  
        <div className=" container" >
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>
            <div className="titulo">Consult and Delete</div>
            <form action="#">
                <div className="cadastro-aeronave">
                    <CrudUsu dados={usuarios} deletar={deletarUsuario} ></CrudUsu>
                </div>

            </form>

        </div>
     );    

    
}
 
export default ConsDelUsu;