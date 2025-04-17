import "../styles/App.css"
import { Clipboard } from "./Clipboard"

export function Password({ visibility, pass }) {

    return (visibility ?
        <div id="generated">
            <h1 id="generated-pass">{pass}</h1>
            <Clipboard text={pass}></Clipboard>
        </div>
        : null
    )
}