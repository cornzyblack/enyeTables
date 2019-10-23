import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Enye Programming Test</h1>
        </header>
    )
}

const headerStyle = {
    // background: "#5945e6",
    color: "#5945e6",
    textAlign: "center",
    padding: '15px'
}

export default Header;