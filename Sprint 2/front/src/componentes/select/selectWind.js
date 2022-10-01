import "./select.css"
const SelectWind = () => {
    return (  
        <><div className="medidas">
        <label htmlFor="" className="tituloS">Wind</label>
        <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
            <option value="default" disabled>Select Wind:</option>
            <option value="1">Head Wind</option>
            <option value="2">Tail Wind</option>
        </select></div>
        </>
        );

}
export default SelectWind;