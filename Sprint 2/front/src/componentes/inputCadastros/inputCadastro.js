import "./inputCadastros.css"

const InputCadastros = ({ id, placeholder, type, text, children }) => {
    return (
        <>
        <div className="input-box">
            <label htmlFor={id}><span class="details">{children}</span></label>
            <input id={id} name={id} type={type} placeholder={placeholder} required />
        </div>
        </>
    );
}

export default InputCadastros;