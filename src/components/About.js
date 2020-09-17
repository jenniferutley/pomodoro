import React from 'react'

function About({ showAbout, setShowAbout }) {

    const closeButton = <ion-icon name="close-sharp"></ion-icon>

    const handleClose = () => {
        document.getElementById("about-modal").classList.add("slide-out-bottom")
        setTimeout(() => {
            setShowAbout(!showAbout)
        }, 500)
    }


    if (!showAbout) {
        return null
    }
    else {
        document.body.style.overflow = "hidden"
        return (
            <section id="about-modal" className="modal slide-in-bottom">
                <div onClick={handleClose}>{closeButton}</div>
                <p>Why am I so cool?</p>
            </section>
        )
    }


}

export default About