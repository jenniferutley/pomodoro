import React, { useState, useEffect, useRef } from 'react';
import { HelmetProvider } from "react-helmet-async"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"
import Timer from './components/Timer'
import Settings from "./components/Settings"
import About from "./components/About"
import endFocus from "./media/piece-of-cake.mp3"
import endBreak from "./media/goes-without-saying.mp3"

momentDurationFormatSetup(moment)

function App() {
  const endFocusAudio = useRef(null)
  const endBreakAudio = useRef(null)
  const [breakLength, setBreakLength] = useState(300)
  const [longBreakLength, setLongBreakLength] = useState(900)
  const [focusLength, setFocusLength] = useState(1500)
  const [focusNumber, setFocusNumber] = useState(0)
  const [focusBeforeLong, setFocusBeforeLong] = useState(4)
  const [intervalID, setIntervalID] = useState(null)
  const [currentSessionType, setCurrentSessionType] = useState("Focus")
  const [timeLeft, setTimeLeft] = useState(focusLength)
  const [autoStart, setAutoStart] = useState(true)
  const [timerInTitle, setTimerInTitle] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const isStarted = intervalID != null
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", { trim: false })
  const settingsButton = <ion-icon name="settings-sharp"></ion-icon>
  const aboutButton = <ion-icon name="help-circle-sharp"></ion-icon>

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
    if (timeLeft === 0 && currentSessionType === "Focus" && focusNumber < (focusBeforeLong - 1)) {
      endFocusAudio.current.volume = 0.1
      endFocusAudio.current.play()
      setCurrentSessionType("Break")
      setTimeLeft(breakLength)
      setFocusNumber(focusNumber + 1)
      if (!autoStart) {
        clearInterval(intervalID)
        setIntervalID(null)
      }
    }
    else if (timeLeft === 0 && currentSessionType === "Focus" && focusNumber === (focusBeforeLong - 1)) {
      endFocusAudio.current.volume = 0.1
      endFocusAudio.current.play()
      setCurrentSessionType("Long Break")
      setTimeLeft(breakLength)
      setFocusNumber(focusNumber + 1)
      if (!autoStart) {
        clearInterval(intervalID)
        setIntervalID(null)
      }
    }
    else if (timeLeft === 0 && currentSessionType === "Break") {
      endBreakAudio.current.volume = 0.1
      endBreakAudio.current.play()
      setCurrentSessionType("Focus")
      setTimeLeft(focusLength)
      if (!autoStart) {
        clearInterval(intervalID)
        setIntervalID(null)
      }
    }
    else if (timeLeft === 0 && currentSessionType === "Long Break") {
      endBreakAudio.current.volume = 0.1
      endBreakAudio.current.play()
      setCurrentSessionType("Focus")
      setFocusNumber(0)
      setTimeLeft(focusLength)
      if (!autoStart) {
        clearInterval(intervalID)
        setIntervalID(null)
      }
    }
  }, [breakLength, currentSessionType, focusLength, timeLeft, focusNumber, autoStart, intervalID, focusBeforeLong])

  //start/pause button handler  
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

  //modals
  const handleSettings = () => {
    setShowModal(!showModal)
  }

  const handleAbout = () => {
    setShowAbout(!showAbout)
  }


  //render
  return (
    <main className="App">
      <HelmetProvider><title>Pomodoro Timer {timerInTitle ? " | " + formattedTimeLeft : ""} </title></HelmetProvider>
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
        focusNumber={focusNumber}
        setFocusNumber={setFocusNumber}
        formattedTimeLeft={formattedTimeLeft}
        focusBeforeLong={focusBeforeLong} />
      <div onClick={handleAbout}>{aboutButton}</div>
      <div onClick={handleSettings}>{settingsButton}</div>
      <About
        showAbout={showAbout}
        setShowAbout={setShowAbout}
      />
      <Settings
        focusLength={focusLength}
        setFocusLength={setFocusLength}
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        longBreakLength={longBreakLength}
        setLongBreakLength={setLongBreakLength}
        autoStart={autoStart}
        setAutoStart={setAutoStart}
        focusBeforeLong={focusBeforeLong}
        setFocusBeforeLong={setFocusBeforeLong}
        timerInTitle={timerInTitle}
        setTimerInTitle={setTimerInTitle}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <audio ref={endFocusAudio}><source src={endFocus} type="audio/mpeg" /></audio>
      <audio ref={endBreakAudio}><source src={endBreak} type="audio/mpeg" /></audio>
    </main>
  )
}

export default App
