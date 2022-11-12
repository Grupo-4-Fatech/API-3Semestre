import React from 'react';
import "./select.css"

const SelectBk = () => {
    return ( 

        <><div className="medidas">
        <label htmlFor="" className="tituloS">Brake application</label>
        <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
            <option value="default" disabled>Select the brake:</option>
            <option value="1">Manual </option>
            <option value="2">MED</option>
            <option value="3">LOW</option>

           </select></div>
    </>


     );
}
 
export default SelectBk;