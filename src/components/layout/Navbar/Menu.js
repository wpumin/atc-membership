import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <li
            className={props.activeOrNotActive}
            onClick={props.onClick}
            aria-label={props.menu.toString().toLowerCase() + ' button'}
        >
            <Link className="nav-link" to={props.path}>
                {props.menu}
            </Link>
        </li>
    )
}

export default Menu
