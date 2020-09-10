import React from 'react'
import moment from 'moment'

const Break = ({ 
    breakLength, 
    decrementBreakLengthByOneMinute, 
    incrementBreakLengthByOneMinute 
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes()
    return (
        <section>
            <h2>Break Component</h2>
            <p>{breakLengthInMinutes}</p>
            <button onClick={decrementBreakLengthByOneMinute}>-</button>
            <button onClick={incrementBreakLengthByOneMinute}>+</button>
        </section>
    )
}

export default Break
