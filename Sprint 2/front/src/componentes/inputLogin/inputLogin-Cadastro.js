import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./inputLogin-Cadastro.css"


const InputLogin = ({id,placeholder,type,icon,text}) => {
    return ( 
        <>
        <label htmlFor={id}>{text}</label>
        <div className="input">
                { icon && <FontAwesomeIcon icon={icon} style={{marginRight:"5px"}}/> }
                <input id={id} placeholder={placeholder} name={id} type={type}  />
            </div>
        </>
     );
}
 
export default InputLogin;