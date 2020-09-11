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
            <div className="btn" onClick={decrementBreakLength}>-</div>
            <div className="btn" onClick={incrementBreakLength}>+</div>
        </section>
    )
}

export default Break
