import React from 'react'

function About({ showAbout, setShowAbout }) {

    const closeButton = <ion-icon name="close-sharp"></ion-icon>

    const handleClose = () => {
        setShowAbout(!showAbout)
    }

    if (!showAbout) {
        return null
    }
    else {
        return (
            <section className="modal">
                <div onClick={handleClose}>{closeButton}</div>
                <h2>Why am I so cool?</h2>
            </section>
        )
    }


}

export default About