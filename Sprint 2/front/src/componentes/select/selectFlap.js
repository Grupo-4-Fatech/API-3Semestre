import "./select.css"

const SelectFlap = () => {
    return (

        <><div className="medidas">
            <label htmlFor="" className="tituloS">Landing flap</label>
            <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
                <option value="default" disabled>Select Flap:</option>
                <option value="1">Flap X </option>
                <option value="2">Flap Y</option>
               </select></div>
        </>

    );
}

export default SelectFlap;