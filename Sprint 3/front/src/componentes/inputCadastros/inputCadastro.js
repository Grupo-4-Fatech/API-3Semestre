import React from 'react';
import "./inputCadastros.css"

const InputCadastros = ({ id, placeholder, type, text, children, min, qtd,desabilitado, validacao, ...props}) => {
    return (
        <>
        <div className="input-box">
            <label htmlFor={id}><span class="details">{children}</span></label>
            <input disabled={desabilitado} max={qtd} min={min} id={id} name={id} type={type} placeholder={placeholder} onChange={validacao} required {...props} />
        </div>
        </>
    );
}

export default InputCadastros;