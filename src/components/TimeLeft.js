import React from 'react'
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment)

const TimeLeft = ({
    handleStartStop,
    timeLeft,
    currentSessionType,
    isStarted
}) => {
    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", { trim: false })
    return (
        <section>
            <h2>Time Left</h2>
            <p>{formattedTimeLeft}</p>
            <p>{currentSessionType}</p>
            <button onClick={handleStartStop}>{isStarted ? "Stop" : "Start"}</button>
        </section>
    )
}

export default TimeLeft
