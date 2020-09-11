import React from 'react'
import moment from 'moment'

const Focus = ({
    focusLength, 
    decrementFocusLength, 
    incrementFocusLength 
}) => {
    const focusLengthInMinutes = moment.duration(focusLength, "s").asMinutes()
    return (
        <section>
            <h2>Focus</h2>
            <p>{focusLengthInMinutes}</p>
            <button onClick={decrementFocusLength}>-</button>
            <button onClick={incrementFocusLength}>+</button>
        </section>
    )
}

export default Focus
