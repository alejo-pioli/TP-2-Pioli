import "../styles/App.css"

export function Password ( {visibility, pass} ) {
    return (visibility ?
        <h1>{pass}</h1>
        : null
    )
}