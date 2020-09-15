import React from 'react'
import moment from 'moment'

function Focus({ focusLength, setFocusLength }) {

    const focusLengthInMinutes = moment.duration(focusLength, "s").asMinutes()

    const handleChangeFocus = (e) => {
        const inputFocusLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
        setFocusLength(inputFocusLengthInSeconds)
    }

    return (
        <section>
            <label htmlFor="focusDuration">focus duration:</label>
            <input type="number" id="focusDuration" min="1" max="59" value={focusLengthInMinutes} onChange={handleChangeFocus} />
        </section>
    )
}

export default Focus
