import React from 'react'

function Timer({ handleStartPause, timeLeft, currentSessionType, setCurrentSessionType, isStarted, focusLength, setFocusLength, setTimeLeft, intervalID, setIntervalID, setBreakLength, breakLength, longBreakLength, setLongBreakLength, focusNumber, setFocusNumber, formattedTimeLeft, focusBeforeLong}) {

    const restartButton = <ion-icon name="play-skip-back-sharp"></ion-icon>
    const playButton = <ion-icon name="play-sharp"></ion-icon>
    const pauseButton = <ion-icon name="pause-sharp"></ion-icon>
    const skipButton = <ion-icon name="play-skip-forward-sharp"></ion-icon>

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
        if (currentSessionType === "Focus" && focusNumber < (focusBeforeLong - 1)) {
            setCurrentSessionType("Break")
            setFocusNumber(focusNumber + 1)
        }
        if (currentSessionType === "Focus" && focusNumber === (focusBeforeLong - 1)) {
            setCurrentSessionType("Long Break")
            setFocusNumber(focusNumber + 1)
        }
        else if (currentSessionType === "Break") {
            setCurrentSessionType("Focus")
        }
        else if (currentSessionType === "Long Break") {
            setCurrentSessionType("Focus")
            setFocusNumber(0)
        }
    }

    return (
        <section>
            <h2>{currentSessionType}</h2>
            <p>{focusNumber}/{focusBeforeLong} Focus Sessions Completed</p>
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
