import React, {useState} from 'react'
import moment from 'moment'

const Focus = () => {
    const [focusLength, setFocusLength] = useState(1500)
    const decrementFocusLengthByOneMinute = () => {
        const newFocusLength = focusLength - 60
        if (newFocusLength < 0 ) {
            setFocusLength(0)
        } else {
            setFocusLength(newFocusLength)
        }
    }
    const incrementFocusLengthByOneMinute = () => {
        setFocusLength(focusLength + 60)
    }
    const focusLengthInMinutes = moment.duration(focusLength, "s").minutes()
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
