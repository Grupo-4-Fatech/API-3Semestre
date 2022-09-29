import BotaoHome from "./botaoHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import "./home.css"

const Home = () => {
    return ( 
        <div className=" container">
            <div className="titulo">Home</div>
            <FontAwesomeIcon icon={faPlane}/>
            <form action="#">
                <div className="cadastro-aeronave">
                    <BotaoHome home="/Cadastro-Aeronave">Aircraft registration</BotaoHome>
                    <BotaoHome home="/Cadastro-usuario">User registration</BotaoHome>
                    <BotaoHome home="/Calculo">Calculation</BotaoHome>
                </div>

            </form>

        </div>
     );
}
 
export default Home;