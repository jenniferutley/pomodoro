import React from 'react'
import moment from 'moment'

const Focus = ({
    focusLength,
    setFocusLength
}) => {

    const focusLengthInMinutes = moment.duration(focusLength, "s").asMinutes()
    let inputLengthInSeconds = focusLength //todo: deal with hitting enter on empty input
    
    const handleChange = (e) => {
        inputLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFocusLength(inputLengthInSeconds)        
    }

    return (
        <section>
            <h2>Focus</h2>
            <p>{focusLengthInMinutes}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="focusDuration">duration:</label>
                <input type="number" id="focusDuration" min="1" max="59" onChange={handleChange}/>
                <button className="btn">Submit</button>
            </form>
        </section>
    )
}

export default Focus
