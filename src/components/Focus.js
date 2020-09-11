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
            <div className="btn" onClick={decrementFocusLength}>-</div>
            <div className="btn" onClick={incrementFocusLength}>+</div>
        </section>
    )
}

export default Focus
