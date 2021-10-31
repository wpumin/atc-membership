import React from 'react'

const Item = (props) => {
    return (
        <li>
            <strong>{props.label}:</strong>
            <span>{props.data ? props.data : '-'}</span>
        </li>
    )
}

export default Item
