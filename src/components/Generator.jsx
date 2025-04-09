import "../styles/App.css"

export function Generator() {
    return (
        <div className="input-container">
            <h1>Genere una contraseña:</h1>
            <div>
                <label for="length">Longitud</label>
                <input type="number" id="length"></input>
            </div>
            <div>
                <input type="checkbox" id="lower"></input>
                <label for="lower">Incluir letras minúsculas</label>
            </div>
            <div>
                <input type="checkbox" id="upper"></input>
                <label for="upper">Incluir letras mayúsculas</label>
            </div>
            <div>
                <input type="checkbox" id="upper"></input>
                <label for="upper">Incluir números</label>
            </div>
            <div>
                <input type="checkbox" id="upper"></input>
                <label for="upper">Incluir caracteres especiales</label>
            </div>
        </div>
    )
}