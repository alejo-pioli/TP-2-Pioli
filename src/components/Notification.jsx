import "../styles/App.css"

export function Notification({visibility}) {
    return (visibility ?
        <div className="notification">
            <h1>Copiado al portapapeles</h1>
        </div> : null
    )
}