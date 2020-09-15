import React from 'react'
import Break from './Break'
import LongBreak from './LongBreak'
import Focus from './Focus'
import AdditionalSettings from "./AdditionalSettings"

function Settings({ focusLength, setFocusLength, breakLength, setBreakLength, longBreakLength, setLongBreakLength, autoStart, setAutoStart, focusBeforeLong, setFocusBeforeLong, timerInTitle, setTimerInTitle, showModal, setShowModal }) {

    const closeButton = <ion-icon name="close-sharp"></ion-icon>

    const handleClose = () => {
        setShowModal(!showModal)
    }

    if (!showModal) {
        return null
    }
    else {
        return (
            <section>
                <div className="modal">
                <div onClick={handleClose}>{closeButton}</div>
                <h2>Settings</h2>
                <div className="settings">
                    <Focus
                        focusLength={focusLength}
                        setFocusLength={setFocusLength} />
                    <Break
                        breakLength={breakLength}
                        setBreakLength={setBreakLength}
                    />
                    <LongBreak
                        longBreakLength={longBreakLength}
                        setLongBreakLength={setLongBreakLength}
                    />
                </div>
                <AdditionalSettings
                    autoStart={autoStart}
                    setAutoStart={setAutoStart}
                    focusBeforeLong={focusBeforeLong}
                    setFocusBeforeLong={setFocusBeforeLong}
                    timerInTitle={timerInTitle}
                    setTimerInTitle={setTimerInTitle}
                />
                </div>
                <div className="modal-overlay"></div>
            </section>
        )
    }
}

export default Settings
