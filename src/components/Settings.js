import React from 'react'

function Settings({ autoStart, setAutoStart }) {

    const handleAutoStart = () => {
        setAutoStart(false)
    }

    return (
        <section>
            <h2>Other Settings</h2>
            <p>automatically start next session</p>
            <p>number of focus sessions before long break</p>
            <p>show timer in title</p>
            <p>volume of notication sounds</p>
        </section>
    )
}

export default Settings
