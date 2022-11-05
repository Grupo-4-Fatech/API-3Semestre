import React from 'react';
import "./select.css"

const Select = () => {
    return (  
        <><div className="medidas">
        <label htmlFor="" className="tituloS">Unit of Measurement</label>
        <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
            <option value="default" disabled>Select measure:</option>
            <option value="1">Imperial</option>
            <option value="2">Metric</option>
        </select></div>
        </>
        );

}



export default Select;