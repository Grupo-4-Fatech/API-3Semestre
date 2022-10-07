import React from 'react';
import "./select.css"
const SelectSlope = () => {
    return (  
        <><div className="medidas">
        <label htmlFor="" className="tituloS">Slope (Type)</label>
        <select className="medida" name="medidas" id="slcSlope" defaultValue={'default'} required>
            <option value="default" disabled>Select slope: </option>
            <option value="1">UpHill</option>
            <option value="2">DownHill</option>
        </select></div>
        </>
        );

}
export default SelectSlope;