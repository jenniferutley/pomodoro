import React from 'react'

function Settings({ autoStart, setAutoStart, focusBeforeLong, setFocusBeforeLong, timerInTitle, setTimerInTitle }) {

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
        <section>
            <h2>Other Settings</h2>
            <div class="settings"><p></p>
            <label htmlFor="focusBeforeLong">number of focus sessions before long break</label>
                <input type="number" id="focusBeforeLong" min="1" max="100" value={focusBeforeLong} onChange={handleFocusBeforeLong} /> 
            </div>
            <div class="settings"><p>automatically start new session</p>
                <label htmlFor="autoStart" class="switch">
                    <input type="checkbox" id="autoStart" defaultChecked={autoStart} onChange={handleAutoStart} />
                    <span class="slider"></span>
                </label>
            </div>
            <div class="settings"><p>show timer in title</p>
                <label htmlFor="timerInTitle"class="switch">
                    <input type="checkbox" id="timerInTitle" defaultChecked={timerInTitle} onChange={handleTimerInTitle} />
                    <span class="slider"></span>
                </label>
            </div>
        </section>
    )
}

export default Settings
