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
            <h1>{formattedTimeLeft}</h1>
            {/* <p>{currentSessionType}</p> */}
            <div className="btn" onClick={handleStartStop}>{isStarted ? "Stop" : "Start"}</div>
        </section>
    )
}

export default TimeLeft
