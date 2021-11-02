import React from 'react'

const HamburgerIcon = (props) => {
    return (
        <span
            id="hamburger-wrapper"
            className={props.hamburgerClass}
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-label="burger icon"
            onClick={props.onToggleHandler}
        >
            <span className="burger" />
        </span>
    )
}

export default HamburgerIcon
