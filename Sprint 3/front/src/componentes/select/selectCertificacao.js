import React from 'react';
import "./select.css"

const SelectCertificacao = () => {
    return (

        <><div className="medidas" id="delt">
            <label htmlFor="" className="tituloS">Certification</label>
            <select className="medida" name="medidas" id="slcCertificacao" defaultValue={'default'}>
                <option value="default" disabled>Certification:</option>
                <option value="ANAC">ANAC</option>
                <option value="EASA">EASA</option>
                <option value="FAA">FAA</option>
            </select></div>
        </>

    );
}

export default SelectCertificacao;