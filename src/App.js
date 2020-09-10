import React, { useState, useEffect, useRef } from 'react';
import Break from './components/Break'
import Focus from './components/Focus'
import TimeLeft from './components/TimeLeft'
import endFocus from "./piece-of-cake.mp3"
import './App.css';

function App() {
  const audioElement = useRef(null)
  const [breakLength, setBreakLength] = useState(300)
  const [focusLength, setFocusLength] = useState(1500)
  const [intervalID, setIntervalID] = useState(null)
  const [currentSessionType, setCurrentSessionType] = useState("Focus")
  const [timeLeft, setTimeLeft] = useState(focusLength)

  useEffect(() => {
    setTimeLeft(focusLength)
  }, [focusLength])

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement.current.play()
      if (currentSessionType === "Focus") {
        setCurrentSessionType("Break")
        setTimeLeft(breakLength)
      }
      else if (currentSessionType === "Break") {
        setCurrentSessionType("Focus")
        setTimeLeft(focusLength)
      }
    }
  }, [breakLength, currentSessionType, focusLength, timeLeft])

  //break
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60
    if (newBreakLength < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(newBreakLength)
    }
  }
  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60)
  }

  //focus
  const decrementFocusLengthByOneMinute = () => {
    const newFocusLength = focusLength - 60
    if (newFocusLength < 0) {
      setFocusLength(0)
    } else {
      setFocusLength(newFocusLength)
    }
  }
  const incrementFocusLengthByOneMinute = () => {
    setFocusLength(focusLength + 60)
  }

  //time left
  const isStarted = intervalID != null
  const handleStartStop = () => {
    if (isStarted) {
      clearInterval(intervalID)
      setIntervalID(null)
    } else {
      const newIntervalID = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
      }, 100) //todo change to 1000
      setIntervalID(newIntervalID)
    }
  }

  //reset
  const handleResetButtonClick = () => {
    audioElement.current.load()
    clearInterval(intervalID)
    setIntervalID(null)
    setCurrentSessionType("Focus")
    setFocusLength(1500)
    setBreakLength(300)
    setTimeLeft(1500) //This seems kind of dumb--resets to 25 and focus even if on a break
    //also, "reset" should be called "reset to DEFAULTS"
  }
  //render
  return (
    <section className="App">
      <h1>App Component</h1>
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />
      <TimeLeft currentSessionType={currentSessionType} handleStartStop={handleStartStop} timeLeft={timeLeft} isStarted={isStarted} />
      <Focus
        focusLength={focusLength}
        decrementFocusLengthByOneMinute={decrementFocusLengthByOneMinute}
        incrementFocusLengthByOneMinute={incrementFocusLengthByOneMinute} />
      <button onClick={handleResetButtonClick}>Reset</button>
      <audio ref={audioElement}><source src={endFocus} type="audio/mpeg" /></audio>
    </section>
  );
}

export default App;
