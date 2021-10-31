import React from 'react'
import { Link } from 'react-router-dom'

const ActionWithLink = (props) => {
    return (
        <Link to={props.pathFromProps} aria-label={props.alt}>
            <img src={props.image} className={props.class} alt={props.alt} />
        </Link>
    )
}

const ActionWithOutLink = (props) => {
    return (
        <button aria-label={props.alt}>
            <img
                src={props.image}
                className={props.class + ' ' + props.activeClass}
                alt={props.alt}
                onClick={props.onClick}
            />
        </button>
    )
}

const ActionButtons = (props) => {
    if (props.type === 'with-link') {
        return (
            <ActionWithLink
                class={props.class}
                image={props.image}
                alt={props.alt}
                pathFromProps={props.pathFromProps}
            />
        )
    } else {
        return (
            <ActionWithOutLink
                class={props.class}
                image={props.image}
                alt={props.alt}
                onClick={props.onClick}
                activeClass={props.activeClass}
            />
        )
    }
}

export default ActionButtons
