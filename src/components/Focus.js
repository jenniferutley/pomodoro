import React from 'react'
import moment from 'moment'

const Focus = ({
    focusLength, 
    decrementFocusLengthByOneMinute, 
    incrementFocusLengthByOneMinute 
}) => {
    const focusLengthInMinutes = moment.duration(focusLength, "s").asMinutes()
    return (
        <section>
            <h2>Focus Component</h2>
            <p>{focusLengthInMinutes}</p>
            <button onClick={decrementFocusLengthByOneMinute}>-</button>
            <button onClick={incrementFocusLengthByOneMinute}>+</button>
        </section>
    )
}

export default Focus
