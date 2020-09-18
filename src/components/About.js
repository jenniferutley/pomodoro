import React from 'react'

function About({ showAbout, setShowAbout }) {

  const closeButton = <ion-icon name="close-sharp"></ion-icon>

  const handleClose = () => {
    document.getElementById("about-modal").classList.remove("slide-in-bottom")
    document.getElementById("about-modal").classList.add("slide-out-bottom")
    setTimeout(() => {
      setShowAbout(!showAbout)
    }, 500)
  }

  if (!showAbout) {
    return null
  }
  else {
    document.body.style.overflow = "hidden" //hide scrollbar caused by animation
    return (
      <section id="about-modal" className="modal slide-in-bottom">        
          <p className="section-title">About</p>
          <div className="x-grid-about" onClick={handleClose}>{closeButton}</div>       
        <p className="about-grid">Evidence suggests that people can generally only stay focused for about 50 minutes before their minds begin to wander. Indeed, <a href="https://www.businessinsider.com/this-is-the-perfect-amount-of-time-to-work-each-day-2016-1" target="blank">one study</a> found that people produce higher quality work when they take breaks after about 50 minutes of focusing. The pomodoro technique (pomodoro being Italian for "tomato") takes this a step further by scheduling breaks before fatigue and distractability set in, typically every 25 minutes. The standard schedule is to work 25 minutes, take a 5-minute break (ideally involving getting away from your desk), and then taking a longer, 15-minute break every two hours.</p>
        <br />
      </section>
    )
  }


}

export default About