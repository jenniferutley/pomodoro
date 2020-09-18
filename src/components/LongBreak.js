import React from 'react'
import moment from 'moment'

function LongBreak({ longBreakLength, setLongBreakLength }) {

  const longBreakLengthInMinutes = moment.duration(longBreakLength, "s").asMinutes()

  const handleChangeLongBreak = (e) => {
    const inputLongBreakLengthInSeconds = moment.duration(e.target.value, "m").asSeconds()
    setLongBreakLength(inputLongBreakLengthInSeconds)
  }

  return (
    <section>
      <label htmlFor="longBreakDuration">long break duration</label>
      <input type="number" id="longBreakDuration" min="1" value={longBreakLengthInMinutes} onChange={handleChangeLongBreak} />
    </section>
  )
}

export default LongBreak
