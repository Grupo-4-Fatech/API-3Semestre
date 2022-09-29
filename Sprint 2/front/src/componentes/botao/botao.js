import { Link } from "react-router-dom";
import "./botao.css"

const Botao = ({children,home, acao}) => {
    return ( 
        <div className="botao">
            <Link to={home} ><input type="button" onClick={acao} value={children}/></Link>
        </div>
    );
}

export default Botao;