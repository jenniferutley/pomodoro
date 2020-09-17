import React from 'react'
import Break from './Break'
import LongBreak from './LongBreak'
import Focus from './Focus'
import AdditionalSettings from "./AdditionalSettings"

function Settings({ focusLength, setFocusLength, breakLength, setBreakLength, longBreakLength, setLongBreakLength, autoStart, setAutoStart, focusBeforeLong, setFocusBeforeLong, timerInTitle, setTimerInTitle, showSettings, setShowSettings }) {

    const closeButton = <ion-icon name="close-sharp"></ion-icon>

    const handleClose = () => {
        document.getElementById("settings-modal").classList.add("slide-out-bottom")
        setTimeout(() => {
            setShowSettings(!showSettings)
        }, 500)
    }

    if (!showSettings) {
        return null
    }

    else {
        document.body.style.overflow = "hidden"
        return (
            <section id="settings-modal" className="modal slide-in-bottom">


                <div className="settings-title"><p>Settings</p> <div className="settings-close" onClick={handleClose}>{closeButton}</div>


                </div>

                <div className="settings-1">
                    <Focus
                        focusLength={focusLength}
                        setFocusLength={setFocusLength} />
                    <Break
                        breakLength={breakLength}
                        setBreakLength={setBreakLength}
                    />
                </div>

                <div className="settings-2">
                    <LongBreak
                        longBreakLength={longBreakLength}
                        setLongBreakLength={setLongBreakLength}
                    />


                    <AdditionalSettings
                        autoStart={autoStart}
                        setAutoStart={setAutoStart}
                        focusBeforeLong={focusBeforeLong}
                        setFocusBeforeLong={setFocusBeforeLong}
                        timerInTitle={timerInTitle}
                        setTimerInTitle={setTimerInTitle}
                    />
                </div>
            </section>
        )
    }
}

export default Settings
