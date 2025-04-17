import "../styles/App.css"
import { Clipboard } from "./Clipboard"

export function Password({ visibility, pass }) {

    return (visibility ?
        <div>
            <h1>{pass}</h1>
            <Clipboard text={pass}></Clipboard>
        </div>
        : null
    )
}