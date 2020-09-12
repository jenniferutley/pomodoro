import React from 'react'
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment)

function Timer({ handleStartPause, timeLeft, currentSessionType, setCurrentSessionType, isStarted, focusLength, setFocusLength, setTimeLeft, intervalID, setIntervalID, setBreakLength, breakLength, longBreakLength, setLongBreakLength, focusNumber}) {

    const restartButton = <ion-icon name="play-skip-back-sharp"></ion-icon>
    const playButton = <ion-icon name="play-sharp"></ion-icon>
    const pauseButton = <ion-icon name="pause-sharp"></ion-icon>
    const skipButton = <ion-icon name="play-skip-forward-sharp"></ion-icon>
    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", { trim: false })   

    const handleRestart = () => {
        clearInterval(intervalID)
        setIntervalID(null)
        if (currentSessionType === "Focus") {
            setFocusLength(focusLength)
            setTimeLeft(focusLength)
        }
        else if (currentSessionType === "Break") {
            setBreakLength(breakLength)
            setTimeLeft(breakLength)
        }
        else if (currentSessionType === "Long Break") {
            setLongBreakLength(longBreakLength)
            setTimeLeft(longBreakLength)
        }
    }

    const handleSkip = () => {
        clearInterval(intervalID)
        setIntervalID(null)
        if (currentSessionType === "Focus") {
            setCurrentSessionType("Break")
        }
        else if (currentSessionType === "Break" || currentSessionType === "Long Break") {
            setCurrentSessionType("Focus")
        }
    }

    return (
        <section>
            <p>{currentSessionType}</p>
            <p>{focusNumber}/4 Focus Sessions</p>
            <h1>{formattedTimeLeft}</h1>
            <div className="controls">
                <div onClick={handleRestart} title="restart current session">{restartButton}</div>
                <div onClick={handleStartPause}>{isStarted ? pauseButton : playButton}</div>
                <div onClick={handleSkip} title="skip to next session">{skipButton}</div>
            </div>
        </section>
    )
}

export default Timer
