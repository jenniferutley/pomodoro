import React from 'react'
import moment from 'moment'

const Break = ({ 
    breakLength,
    setBreakLength 
}) => {

    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes()
    let inputLengthInSeconds = breakLength //todo: deal with hitting enter on empty input

    const handleChange = (e) => {
        inputLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBreakLength(inputLengthInSeconds)        
    }

    return (
        <section>
            <h2>Break</h2>
            <p>{breakLengthInMinutes}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="breakDuration">duration:</label>
                <input type="number" id="breakDuration" min="1" max="59" onChange={handleChange}/>
                <button className="btn">Submit</button>
            </form>
        </section>
    )
}

export default Break
