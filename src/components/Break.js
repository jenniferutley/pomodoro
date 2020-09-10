import React, {useState} from 'react'
import moment from 'moment'

const Break = () => {
    const [breakLength, setBreakLength] = useState(300)
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60
        if (newBreakLength < 0 ) {
            setBreakLength(0)
        } else {
            setBreakLength(newBreakLength)
        }
    }
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60)
    }
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes()
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
