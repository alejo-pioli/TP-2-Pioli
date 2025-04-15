import { useState } from "react";
import "../styles/App.css"
import { Password } from "./Password"

export function Generator() {

    const [pass, setPass] = useState("");
    const [isVisible, setVisible] = useState(false);
    

    return (
        <div className="generator">
            <form>
                <h1 className="title">Genere una contraseña:</h1>
                <div>
                    <label for="length">Longitud</label>
                    <input type="number" id="length" min="8" max="25"></input>
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
                    <input type="checkbox" id="num"></input>
                    <label for="num">Incluir números</label>
                </div>
                <div>
                    <input type="checkbox" id="special"></input>
                    <label for="special ">Incluir caracteres especiales</label>
                </div>
                <button type="submit" id="generar">Generar</button>
            </form>
            <Password visibility={isVisible} pass={pass}></Password>
        </div>
    )
}