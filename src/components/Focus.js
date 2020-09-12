import React from 'react'
import moment from 'moment'

function Focus({ focusLength, setFocusLength}) {

    const focusLengthInMinutes = moment.duration(focusLength, "s").asMinutes()

    const handleChangeFocus = (e) => {
        const inputFocusLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
        setFocusLength(inputFocusLengthInSeconds)
    }

    return (
        <section>
            <h2>Focus</h2>
            <p>{focusLengthInMinutes}</p>
                <label htmlFor="focusDuration">duration:</label>
                <input type="number" id="focusDuration" min="1" max="59" onChange={handleChangeFocus} />            
        </section>
    )
}

export default Focus
