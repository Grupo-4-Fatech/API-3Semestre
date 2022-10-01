import CrudUsu from "../../componentes/Read-Delect-Update/crudUsu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ConsDelUsu = () => {
    const usuarios = [
        {
          nome: "Denis Lima",
          email: "denislima@gmail.com",
          senha: "denis123"
        },
        {
          nome: "Gabriel Coutinho",
          email: "gabrielcoutinho@gmail.com",
          senha: "gabriel123"
        },
        {
          nome: "Carlos Henrique",
          email: "carloshenrique@gmail.com",
          senha: "carloshenrique123"
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