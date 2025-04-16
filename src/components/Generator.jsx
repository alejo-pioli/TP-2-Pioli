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
                    <label className="not-selectable" for="length">Longitud</label>
                    <input type="number" id="length" min="8" max="25"></input>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="lower"></input>
                    <label className="not-selectable" for="lower">Incluir letras minúsculas</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="upper"></input>
                    <label className="not-selectable" for="upper">Incluir letras mayúsculas</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="num"></input>
                    <label className="not-selectable" for="num">Incluir números</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="special"></input>
                    <label className="not-selectable" for="special">Incluir caracteres especiales</label>
                </div>
                <button className="not-selectable" type="submit" id="generar">Generar</button>
            </form>
            <Password visibility={isVisible} pass={pass}></Password>
        </div>
    )
}