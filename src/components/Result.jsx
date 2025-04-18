import "../styles/App.css"

export function Result({visibility, text, classType}) {
    return (visibility ?
        <div className="result">
            <h2 className={classType} id="result">{text}</h2>
        </div> : null
    )
}