import React from 'react'

function AdditionalSettings({ autoStart, setAutoStart, focusBeforeLong, setFocusBeforeLong, timerInTitle, setTimerInTitle }) {

    const handleAutoStart = () => {
        setAutoStart(!autoStart)
    }

    const handleFocusBeforeLong = (e) => {
        setFocusBeforeLong(e.target.value)
    }

    const handleTimerInTitle = () => {
        setTimerInTitle(!timerInTitle)
    }

    return (
        <section >
            <div>
                <label htmlFor="focusBeforeLong">focus sessions before long break</label>
                <input type="number" id="focusBeforeLong" min="1" max="100" value={focusBeforeLong} onChange={handleFocusBeforeLong} />
            </div>
            <div><p>automatically start next session</p>
                <label htmlFor="autoStart" className="switch">
                    <input type="checkbox" id="autoStart" defaultChecked={autoStart} onChange={handleAutoStart} />
                    <span className="slider"></span>
                </label>
            </div>
            <div><p>show timer in title</p>
                <label htmlFor="timerInTitle" className="switch">
                    <input type="checkbox" id="timerInTitle" defaultChecked={timerInTitle} onChange={handleTimerInTitle} />
                    <span className="slider"></span>
                </label>
            </div>
        </section>
    )
}

export default AdditionalSettings
