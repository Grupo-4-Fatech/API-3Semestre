import React from 'react';
import BotaoHome from "./botaoHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import "./home.css"

const Home = () => {
    const handleLogOut = function(){
        fetch("/LogOut", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            
          }).then((resposta) => resposta.json()).then((data) => {
                if(data){
                    window.location = '/'
                }
              
            })
    }
    return ( 
        <div className=" containerHome">
            <div onClick={handleLogOut} id='btnlogout'><button ><FontAwesomeIcon icon={faRightFromBracket} id="iconlogout"/></button></div>
            <div className="tituloHome">Home</div>
            <FontAwesomeIcon icon={faPlane}/>
            <form action="#">
                <div className="Home">
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