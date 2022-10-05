import "./inputCadastros.css"

const InputCadastros = ({ id, placeholder, type, text, children, min, qtd, validacao}) => {
    return (
        <>
        <div className="input-box">
            <label htmlFor={id}><span class="details">{children}</span></label>
            <input max={qtd} min={min} id={id} name={id} type={type} placeholder={placeholder} onChange={validacao} required />
        </div>
        </>
    );
}

export default InputCadastros;