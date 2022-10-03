import "./select.css"

const SelectFlap = () => {
    return (

        <><div className="medidas">
            <label htmlFor="" className="tituloS">Landing flap</label>
            <select className="medida" name="medidas" id="slcFlap" defaultValue={'default'}>
                <option value="default" disabled>Select Flap:</option>
                <option value="220">Flap 220 </option>
                <option value="450">Flap 450</option>
               </select></div>
        </>

    );
}

export default SelectFlap;