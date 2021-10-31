import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="id-column">ID</th>
                <th className="name-column">Name</th>
                <th className="email-column">Email</th>
                <th className="tel-column">Tel</th>
                <th className="center action-column">Action</th>
            </tr>
        </thead>
    )
}

export default TableHeader
