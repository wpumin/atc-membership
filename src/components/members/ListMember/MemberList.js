import React, { useState } from 'react'
import axios from 'axios'
import ActionButtons from './ActionButtons'
import { PATH } from '../../../const/Constant'
import Swal from 'sweetalert2'

// svg img
import RemoveButton from '../../../images/remove.svg'
import EditButton from '../../../images/edit.svg'
import WatchlistButton from '../../../images/watchlist.svg'
import ViewButton from '../../../images/view.svg'
import LoadingIcon from '../../../images/loading_purple.svg'

const MemberList = (props) => {
    const { REACT_APP_JSON_SERVER } = process.env
    const members = props.data
    const pathFromProps = props.pathFromProps

    const deleteMember = async (id) => {
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: 'You want to remove these user',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Your member has been deleted',
                        showConfirmButton: false,
                        timer: 2000,
                    }).then(async () => {
                        await axios
                            .delete(`${REACT_APP_JSON_SERVER}/members/${id}`)
                            .then(() => {
                                console.log('member deleted!')
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                            .finally(() => {
                                props.loadMembers()
                            })
                    })
                }
            })
    }

    const onWatchlistChange = async (presentMember) => {
        presentMember.watchlist = !presentMember.watchlist
        await axios
            .put(
                `${REACT_APP_JSON_SERVER}/members/${presentMember.id}`,
                presentMember
            )
            .then(() => {
                console.log('wathlist toggle!')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Updating watchlist success!`,
                    text: `${presentMember.name} was ${
                        presentMember.watchlist === false ? 'removed' : 'added'
                    } in watchlisted`,
                    showConfirmButton: false,
                    timer: 3000,
                })
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                props.loadMembers()
            })
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
    })

    const NormalList = () => {
        return (
            <React.Fragment>
                {members.map((member, index) => (
                    <tr key={index}>
                        <th className="center">{member.id}</th>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.tel}</td>
                        <td className="action-button center">
                            <ActionButtons
                                type="without-link"
                                image={RemoveButton}
                                class="action-button__remove"
                                alt="remove button"
                                onClick={() => deleteMember(member.id)}
                            />
                            <ActionButtons
                                type="with-link"
                                image={EditButton}
                                class="action-button__edit"
                                alt="edit button"
                                pathFromProps={`${PATH}/edit/${member.id}`}
                            />
                            <ActionButtons
                                type="without-link"
                                image={WatchlistButton}
                                class="action-button__watchlist"
                                activeClass={member.watchlist ? 'active' : ''}
                                alt="watchlist button"
                                onClick={() => onWatchlistChange(member)}
                            />
                            <ActionButtons
                                type="with-link"
                                image={ViewButton}
                                class="action-button__view"
                                alt="veiw button"
                                pathFromProps={`${PATH}/view/${member.id}`}
                            />
                        </td>
                    </tr>
                ))}
            </React.Fragment>
        )
    }

    const WatchList = () => {
        return (
            <React.Fragment>
                {members.map((member, index) => (
                    <React.Fragment key={index}>
                        {member.watchlist && (
                            <tr>
                                <th className="center">{member.id}</th>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.tel}</td>
                                <td className="action-button center">
                                    <ActionButtons
                                        type="without-link"
                                        image={RemoveButton}
                                        class="action-button__remove"
                                        alt="remove button"
                                        onClick={() => deleteMember(member.id)}
                                    />
                                    <ActionButtons
                                        type="with-link"
                                        image={EditButton}
                                        class="action-button__edit"
                                        alt="edit button"
                                        pathFromProps={`${PATH}/edit/${member.id}`}
                                    />
                                    <ActionButtons
                                        type="without-link"
                                        image={WatchlistButton}
                                        class="action-button__watchlist"
                                        activeClass={
                                            member.watchlist ? 'active' : ''
                                        }
                                        alt="watchlist button"
                                        onClick={() =>
                                            onWatchlistChange(member)
                                        }
                                    />
                                    <ActionButtons
                                        type="with-link"
                                        image={ViewButton}
                                        class="action-button__view"
                                        alt="veiw button"
                                        pathFromProps={`${PATH}/view/${member.id}`}
                                    />
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }

    return (
        <tbody>{pathFromProps === PATH ? <NormalList /> : <WatchList />}</tbody>
    )
}

export default MemberList
