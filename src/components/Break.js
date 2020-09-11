import React from 'react'
import moment from 'moment'

const Break = ({ 
    breakLength, 
    decrementBreakLength, 
    incrementBreakLength 
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes()
    return (
        <section>
            <h2>Break</h2>
            <p>{breakLengthInMinutes}</p>
            <button onClick={decrementBreakLength}>-</button>
            <button onClick={incrementBreakLength}>+</button>
        </section>
    )
}

export default Break
