import "./select.css"

const SelectCondicao = () => {
    return (

        <><div className="medidas">
            <label htmlFor="" className="tituloS">Runway condition</label>
            <select className="medida" name="medidas" id="medida" defaultValue={'default'}>
                <option value="default" disabled>Select Condition:</option>
                <option value="1">1 POOR </option>
                <option value="2">2 MEDIUM TO POOR </option>
                <option value="3">3 MEDIUM</option>
                <option value="4">4 GOOD TO MEDIUM</option>
                <option value="5">5 GOOD</option>
                <option value="6">6 DRY</option>

            </select></div>
        </>

    );
}

export default SelectCondicao;