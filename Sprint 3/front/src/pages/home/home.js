import React from 'react';
import BotaoHome from "./botaoHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import "../../index"

const Home = () => {
    return ( 
        <div className="container">
            <div id='btnlogout'><button ><FontAwesomeIcon icon={faRightFromBracket}/></button></div>
            <div className="titulo">Home</div>
            <div className='icones'><FontAwesomeIcon icon={faPlane}/></div>
            
            <form action="#">
                <div className="detalhes">
                    <BotaoHome home="/Cadastro-Aeronave">Aircraft registration</BotaoHome>
                    <BotaoHome home="/Calculo">Calculation</BotaoHome>
                    <BotaoHome home="/Cadastro-usuario">User registration</BotaoHome>                  
                    <BotaoHome home="/Consulta">Consult user</BotaoHome>
                    <BotaoHome home="/Consulta-aeronave"> Consult Aircraft </BotaoHome>
                </div>

            </form>

        </div>
     );
}
 
export default Home;