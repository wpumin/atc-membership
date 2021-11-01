import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { StyledViewMember } from './ViewMember.styled'
import Highlight from '../../UI/Highlight'
import useAxios from '../../../hooks/useAxios'
import Loading from '../../UI/Loading'
import Item from './Item'
import NotFound from '../../pages/NotFound'
import Swal from 'sweetalert2'

const ViewMember = () => {
    const { REACT_APP_JSON_SERVER } = process.env
    let history = useHistory()
    const { id } = useParams()
    const [member, setMember] = useState({})

    const { response, loading, error } = useAxios({
        method: 'get',
        url: `${REACT_APP_JSON_SERVER}/members/${id}`,
    })

    useEffect(() => {
        const checkHandler = () => {
            if (response !== null && !error) {
                setMember(response)
            }
            if (error.message !== undefined && loading !== false) {
                return Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Not found!',
                    text: 'Your member has been not found',
                    showConfirmButton: false,
                    timer: 2000,
                })
            }
        }
        checkHandler()
    })

    const backHandler = (e) => {
        e.preventDefault()
        history.goBack()
    }

    const Found = () => {
        return (
            <React.Fragment>
                <Highlight color="primary" text="Member Information" />
                {loading ? (
                    <Loading />
                ) : (
                    <React.Fragment>
                        <ul>
                            <Item label="ID" data={member.id} />
                            <Item label="Name" data={member.name} />
                            <Item label="Department" data={member.department} />
                            <Item label="Role" data={member.role} />
                            <Item label="Email" data={member.email} />
                            <Item label="Tel" data={member.tel} />
                            <Item label="Location" data={member.location} />
                            <Item label="Comment" data={member.comment} />
                        </ul>
                        <button
                            tabIndex={1}
                            aria-label="back button"
                            onClick={(e) => backHandler(e)}
                            className="btn btn-primary w-100"
                        >
                            Back
                        </button>
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }

    return (
        <StyledViewMember>
            <React.Fragment>{!error ? <Found /> : <NotFound />}</React.Fragment>
        </StyledViewMember>
    )
}

export default ViewMember
