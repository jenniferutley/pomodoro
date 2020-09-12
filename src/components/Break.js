import React from 'react'
import moment from 'moment'

function Break({ breakLength, setBreakLength }) {
    
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes()

    const handleChangeBreak = (e) => {
        const inputBreakLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
        setBreakLength(inputBreakLengthInSeconds)
    }

    return (
        <section>
            <h2>Break</h2>
                <label htmlFor="breakDuration">duration:</label>
                <input type="number" id="breakDuration" min="1" max="59" value={breakLengthInMinutes} onChange={handleChangeBreak} />           
        </section>
    )
}

export default Break
