import "../styles/App.css"

export function Notification({visibility, width}) {
    return (visibility ?
        <div className="notification">
            <h1>¡Copiado al portapapeles!</h1>
            <div className={"underline "+ width}></div>
        </div> : null
    )
}