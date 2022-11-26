import React from 'react';
import "./select.css"

const SelectFlap = ({dados}) => {
    console.log(dados)
    return (

        <><div className="medidas" id="delt">
            <label htmlFor="" className="tituloS">Landing flap</label>
            <select className="medida" name="medidas" id="slcFlap" defaultValue={'default'}>
                <option value="default" disabled>Select Flap:</option>
                {dados.map(element => {
                 return (<option value={element.flap}> {element.flap} </option>)
                 })}
                
               </select>
            </div>
        </>

    );
}

export default SelectFlap;