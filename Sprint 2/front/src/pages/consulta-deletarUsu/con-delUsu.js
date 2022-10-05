import CrudUsu from "../../componentes/Read-Delect-Update/crudUsu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ConsDelUsu = () => {
    const usuarios = [
        {
          Nome: "Denis Lima",
          Email: "denislima@gmail.com",
          Senha: "denis123"
          
          
        },
        {
          Nome: "Gabriel Coutinho",
          Email: "gabrielcoutinho@gmail.com",
          Senha: "gabriel123"
         
        },
        {
          Nome: "Carlos Henrique",
          Email: "carloshenrique@gmail.com",
          Senha: "carloshenrique123"
          
        },
        {
          
            Nome: "Carlos Henrique",
            Email: "carloshenrique@gmail.com",
            Senha: "carloshenrique123"
            
          
        },
        {
          Nome: "Carlos Henrique",
          Email: "carloshenrique@gmail.com",
          Senha: "carloshenrique123"
          
        }
      ]
    return (  

        <div className=" container">
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>
            <div className="titulo">Consult and Delete</div>
            <form action="#">
                <div className="cadastro-aeronave">
                    <CrudUsu dados={usuarios}></CrudUsu>
                </div>

            </form>

        </div>
     );    

    
}
 
export default ConsDelUsu;