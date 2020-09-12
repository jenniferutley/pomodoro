import React, { useState, useEffect, useRef } from 'react';
import Break from './components/Break'
import LongBreak from './components/LongBreak'
import Focus from './components/Focus'
import Timer from './components/Timer'
import endFocus from "./media/piece-of-cake.mp3"
import endBreak from "./media/goes-without-saying.mp3"
import './App.css'

function App() {
  const endFocusAudio = useRef(null)
  const endBreakAudio = useRef(null)
  const [breakLength, setBreakLength] = useState(300)
  const [longBreakLength, setLongBreakLength] = useState(900)
  const [focusLength, setFocusLength] = useState(1500)
  const [focusNumber, setFocusNumber] = useState(0)
  const [intervalID, setIntervalID] = useState(null)
  const [currentSessionType, setCurrentSessionType] = useState("Focus")
  const [timeLeft, setTimeLeft] = useState(focusLength)

  //listen for changes to session durations
  useEffect(() => {
    if (currentSessionType === "Break")
    setTimeLeft(breakLength)
  }, [currentSessionType, breakLength])

  useEffect(() => {
    if (currentSessionType === "Long Break")
    setTimeLeft(longBreakLength)
  }, [currentSessionType, longBreakLength])

  useEffect(() => {
    if (currentSessionType === "Focus")
    setTimeLeft(focusLength)
  }, [currentSessionType, focusLength])

  //listen for sessions to end
  useEffect(() => {
    if (timeLeft === 0 && currentSessionType === "Focus" && focusNumber < 3) {
      endFocusAudio.current.volume = 0.1
      endFocusAudio.current.play()
      setCurrentSessionType("Break")
      setTimeLeft(breakLength)
      setFocusNumber(focusNumber + 1)
    }
    else if (timeLeft === 0 && currentSessionType === "Focus" && focusNumber === 3) {
      endFocusAudio.current.volume = 0.1
      endFocusAudio.current.play()
      setCurrentSessionType("Long Break")
      setTimeLeft(breakLength)
      setFocusNumber(focusNumber + 1)
    }
    else if (timeLeft === 0 && currentSessionType === "Break") {
      endBreakAudio.current.volume = 0.1
      endBreakAudio.current.play()
      setCurrentSessionType("Focus")
      setTimeLeft(focusLength)
    }
    else if (timeLeft === 0 && currentSessionType === "Long Break") {
      endBreakAudio.current.volume = 0.1
      endBreakAudio.current.play()
      setCurrentSessionType("Focus")
      setFocusNumber(0)
      setTimeLeft(focusLength)
    }
  }, [breakLength, currentSessionType, focusLength, timeLeft, focusNumber])

  //start/pause button handler
  const isStarted = intervalID != null
  const handleStartPause = () => {
    if (isStarted) {
      clearInterval(intervalID)
      setIntervalID(null)
    } else {
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

  //render
  return (
    <main className="App">
      <h2>Pomodoro Timer</h2>
      <Timer
        handleStartPause={handleStartPause}
        timeLeft={timeLeft}
        currentSessionType={currentSessionType}
        setCurrentSessionType={setCurrentSessionType}
        isStarted={isStarted}
        focusLength={focusLength}
        setFocusLength={setFocusLength}
        setTimeLeft={setTimeLeft}
        intervalID={intervalID}
        setIntervalID={setIntervalID}
        setBreakLength={setBreakLength}
        breakLength={breakLength}
        setLongBreakLength={setLongBreakLength}
        longBreakLength={longBreakLength}
        focusNumber={focusNumber} />
      <div className="settings">
        <Focus
          focusLength={focusLength}
          setFocusLength={setFocusLength} />
        <Break
          breakLength={breakLength}
          setBreakLength={setBreakLength}
        />
        <LongBreak
          longBreakLength={longBreakLength}
          setLongBreakLength={setLongBreakLength}
        />
        <audio ref={endFocusAudio}><source src={endFocus} type="audio/mpeg" /></audio>
        <audio ref={endBreakAudio}><source src={endBreak} type="audio/mpeg" /></audio>
      </div>
    </main>
  )
}

export default App
