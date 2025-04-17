import "../styles/App.css"
import { Notification } from "./Notification"
import { useState } from "react";

export function Clipboard( {text} ) {

    let baseTime;
    const percentages = ["p90", "p80", "p70", "p60", "p50", "p40", "p30", "p20", "p10", "p00"];
    const [underlineWidth, setUnderlineWidth] = useState("p100");
    const [notificationIsVisible, setNotificationIsVisible] = useState(false)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text === "" ? document.getElementById("password-input").value : text)
        setNotificationIsVisible(true)

        setUnderlineWidth("p100")
        var highestTimeoutId = setTimeout(";");
        for (var i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
        baseTime = 0
        for (let i = 0; i < percentages.length; i++) {
            baseTime += 300;
            setTimeout(() => setUnderlineWidth(percentages[i]), baseTime);
        }
        setTimeout(() => { setNotificationIsVisible(false); }, 3000)

    }

    return (
        <div classname="clipboard-container">
            <button type="button" onClick={copyToClipboard}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" /></svg></button>
            <Notification visibility={notificationIsVisible} width={underlineWidth}></Notification>
        </div>
    )
}