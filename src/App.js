import React, { useState, useEffect, useRef } from 'react';
import Break from './components/Break'
import Focus from './components/Focus'
import TimeLeft from './components/TimeLeft'
import tomato from "./media/tomato.png"
import endFocus from "./media/piece-of-cake.mp3"
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
      audioElement.current.volume = 0.1
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
  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 60
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength)
    }
  }

  const incrementBreakLength = () => {
    const newBreakLength = breakLength + 60
    if (newBreakLength <= 3600) {
      setBreakLength(newBreakLength)
    }
  }

  //focus
  const decrementFocusLength = () => {
    const newFocusLength = focusLength - 60
    if (newFocusLength > 0) {
      setFocusLength(newFocusLength)
    }

  }
  const incrementFocusLength = () => {
    const newFocusLength = focusLength + 60
    if (newFocusLength <= 3600) {
      setFocusLength(newFocusLength)
    }
  }

  //time left
  const isStarted = intervalID != null //set to true if an intervalID exists
  const handleStartStop = () => {
    if (isStarted) { //the user hit stop
      clearInterval(intervalID)
      setIntervalID(null)
    } else { //the user hit start
      const newIntervalID = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1
          if (newTimeLeft >= 0) {
            return newTimeLeft
          }
        })
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
    setFocusLength(1500) //WHY NOT FOCUS LENGTH!!!
    setBreakLength(300)
    setTimeLeft(1500) //This seems kind of dumb--resets to 25 and focus even if on a break
    //also, "reset" should be called "reset to DEFAULTS"
  }

  //render
  return (
    <main className="App">
      <h2>Pomodoro Timer</h2>
      {/* <img src={tomato} alt="a tomato"></img> */}
      <TimeLeft currentSessionType={currentSessionType} handleStartStop={handleStartStop} timeLeft={timeLeft} isStarted={isStarted} />
      <div className="settings">
      <Focus
          focusLength={focusLength}
          decrementFocusLength={decrementFocusLength}
          incrementFocusLength={incrementFocusLength} />
        <div className="btn" onClick={handleResetButtonClick}>Reset</div>
        <Break
        breakLength={breakLength}
        decrementBreakLength={decrementBreakLength}
        incrementBreakLength={incrementBreakLength}
      />
        <audio ref={audioElement}><source src={endFocus} type="audio/mpeg" /></audio>
      </div>
    </main>
  )
}

export default App
