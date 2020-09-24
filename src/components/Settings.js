import React from 'react'
import Break from './Break'
import LongBreak from './LongBreak'
import Focus from './Focus'

function Settings({ focusLength, setFocusLength, breakLength, setBreakLength, longBreakLength, setLongBreakLength, autoStart, setAutoStart, focusBeforeLong, setFocusBeforeLong, timerInTitle, setTimerInTitle, showSettings, setShowSettings }) {

  const closeButton = <ion-icon name="close-sharp"></ion-icon>

  const handleClose = () => {
    document.getElementById("settings-modal").classList.add("slide-out-bottom")
    setTimeout(() => {
      setShowSettings(!showSettings)
    }, 500)
  }

  const handleAutoStart = () => {
    setAutoStart(!autoStart)
  }

  const handleFocusBeforeLong = (e) => {
    setFocusBeforeLong(e.target.value)
  }

  const handleTimerInTitle = () => {
    setTimerInTitle(!timerInTitle)
  }

  if (!showSettings) {
    return null
  }
  else {
    document.body.style.overflow = "hidden" //hide scrollbar caused by animation
    return (
      <section id="settings-modal" className="modal slide-in-bottom">
        <p className="section-title">Settings</p>
        <div className="x-grid" onClick={handleClose}>{closeButton}</div>
        <div className="focus-grid">
          <Focus
            focusLength={focusLength}
            setFocusLength={setFocusLength} />
        </div>
        <div className="break-grid">
          <Break
            breakLength={breakLength}
            setBreakLength={setBreakLength}
          />
        </div>
        <div className="long-break-grid">
          <LongBreak
            longBreakLength={longBreakLength}
            setLongBreakLength={setLongBreakLength}
          />
        </div>
        <div className="focus-sessions-grid">
          <label htmlFor="focusBeforeLong">focus sessions before long break</label>
          <input type="number" id="focusBeforeLong" min="1" max="100" value={focusBeforeLong} onChange={handleFocusBeforeLong} />
        </div>

        <div className="autostart-grid">
          <span>automatically start next session</span>
          <div className="switch">
            <label htmlFor="autoStart">
              <input type="checkbox" id="autoStart" defaultChecked={autoStart} onChange={handleAutoStart} />
              <span class="lever"></span>
            </label>
          </div>
        </div>

        <div className="timer-title-grid">
          <span>show timer in title</span>
          <div className="switch">
            <label htmlFor="timerInTitle">
              <input type="checkbox" id="timerInTitle" defaultChecked={timerInTitle} onChange={handleTimerInTitle} />
              <span class="lever"></span>
            </label>
          </div>
        </div>
      </section>
    )
  }
}

export default Settings
