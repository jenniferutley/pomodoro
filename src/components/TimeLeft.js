import React from 'react'
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment)

const TimeLeft = ({
    handleStartPause,
    timeLeft,
    currentSessionType,
    isStarted
}) => {
    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", { trim: false })
    return (
        <section>
            <h1>{formattedTimeLeft}</h1>
            <p>{currentSessionType}</p>
            <div className="btn" onClick={handleStartPause}>{isStarted ? "Pause" : "Start"}</div>
        </section>
    )
}

export default TimeLeft
