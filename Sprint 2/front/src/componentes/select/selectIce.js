import "./select.css"

const SelectIce = () => {
    return (

        <><div className="medidas">
            <label htmlFor="" className="tituloS">Ice Acrecentation</label>
            <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
                <option value="default" disabled>Select Ice:</option>
                <option value="1">Without Ice </option>
                <option value="2">With Ice </option>
               </select></div>
        </>

    );
}

export default SelectIce;