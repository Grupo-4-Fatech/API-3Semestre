import React from 'react';
import "./select.css"

const SelectCertificacao = () => {
    return (

        <><div className="medidas" id="delt">
            <label htmlFor="" className="tituloS">Certificação</label>
            <select className="medida" name="medidas" id="slcCertificacao" defaultValue={'default'}>
                <option value="default" disabled>Certificação:</option>
                <option value="1">ANAC</option>
                <option value="2">EASA</option>
                <option value="3">FAA</option>
            </select></div>
        </>

    );
}

export default SelectCertificacao;