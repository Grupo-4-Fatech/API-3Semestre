import "./cadastro_aeronave.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane} from '@fortawesome/free-solid-svg-icons'


const CadastroAeronave = () => {
    return ( 

        <div className="container">  
        <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>      
        <div className="titulo">Cadastro de aeronaves</div>
        <FontAwesomeIcon icon={faPlane}/>
        <form action="#">
            <div className="detalhes-aeronave">
                <InputCadastros id="Modelo-de-aeronave" type="text" placeholder="Enter the Model">Aircraft Model</InputCadastros>
                <InputCadastros id="Motor" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                <InputCadastros id="Certificaçao" type="text" placeholder="Enter the certification">Certification</InputCadastros>
                <InputCadastros id="Peso" type="number" placeholder="Enter the weight">Reference weight</InputCadastros>
                <InputCadastros id="Reversor" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

            </div>

            {/* <div className="Reversor-details">
                <input type="radio" name="Reversor" id="dot-1"/>
                <input type="radio" name="Reversor" id="dot-2"/>
                <span className="Reversor-title">Reversor</span>

                <div className="category">

                    <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="reversor">Usa reversor</span>
                    </label>

                    <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="reversor">Não usa reversor</span>
                    </label>

                </div>

            </div> */}
            <div className="button">
                <input type="submit" value="Register"/>
            </div>
        </form>

    </div>

     );
}
 
export default CadastroAeronave;