import { useState } from "react";
import "../styles/App.css"
import { Password } from "./Password"

export function Generator() {
    const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const special = ["@", "#", "$", "%", "&", "*", "!", "?", ".", ","]

    const [pass, setPass] = useState("");
    const [isVisible, setVisible] = useState(false);
    function generate(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries())
        
        const characters = []

        if (formJson.lower === "on"){
            characters.push(lowerLetters);
            characters.push(lowerLetters);
        }
        if (formJson.upper === "on"){
            characters.push(upperLetters);
            characters.push(upperLetters);
        }
        if (formJson.num === "on"){
            characters.push(numbers);
        }
        if (formJson.special === "on"){
            characters.push(special);
        }
        if (characters.length === 0){
            alert("Elige al menos un caracter a incluir");
            return;
        }

        let length = parseInt(formJson.length);
        if (length < 8){
            length = 8;
        }
        if (length > 25){
            length = 25;
        }

        let password = ""

        for (let i = 0; i < length; i++){
            const characterType = characters[Math.floor(Math.random() * characters.length)]
            const character = characterType[Math.floor(Math.random() * characterType.length)]
            password += character
        }
        
        setPass(password)
        setVisible(true)
    }

    return (
        <div className="generator-container">
            <h1 className="title">Genere una contraseña:</h1>
            <form onSubmit={generate} className="generator">
                <div>
                    <input className="checkbox" type="checkbox" id="lower" name="lower"></input>
                    <label className="not-selectable" for="lower">Incluir letras minúsculas</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="upper" name="upper"></input>
                    <label className="not-selectable" for="upper">Incluir letras mayúsculas</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="num" name="num"></input>
                    <label className="not-selectable" for="num">Incluir números</label>
                </div>
                <div>
                    <input className="checkbox" type="checkbox" id="special" name="special"></input>
                    <label className="not-selectable" for="special">Incluir caracteres especiales</label>
                </div>
                <div>
                    <label className="not-selectable" for="length">Longitud</label>
                    <input type="number" id="length" min="8" max="25" name="length" required></input>
                </div>
                <button className="not-selectable" type="submit" id="generar">Generar</button> 
          </form>
          <Password visibility={isVisible} pass={pass}></Password>
        </div>
    )
}