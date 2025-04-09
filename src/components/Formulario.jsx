import "../styles/App.css"

export function Formulario() {
    return (
        <div className="input-container">
            <h1>Ingrese su contraseña:</h1>
            <input type="password"></input>
            <button type="button">Mostrar/Ocultar</button>
            <button type="button">Copiar</button>
        </div>
    )
}