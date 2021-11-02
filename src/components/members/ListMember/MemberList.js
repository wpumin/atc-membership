import React from 'react'
import axios from 'axios'
import { PATH } from '../../../const/Constant'
import ActionButton from './ActionButton'
import Swal from 'sweetalert2'

// svg img
import RemoveButton from '../../../images/remove.svg'
import EditButton from '../../../images/edit.svg'
import WatchlistButton from '../../../images/watchlist.svg'
import ViewButton from '../../../images/view.svg'

const MemberList = (props) => {
    const { REACT_APP_JSON_SERVER } = process.env
    const pathFromProps = props.pathFromProps
    const members = props.data
    const activeClass = 'active'

    const deleteMemberHandler = async (id) => {
        const deleteMember = async () => {
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
        }

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: 'You want to remove these member',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    deleteMember()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Your member has been deleted',
                        showConfirmButton: false,
                        timer: 2000,
                    }).then()
                }
            })
    }

    const watchlistHandler = async (presentMember) => {
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
                            <ActionButton
                                type="without-link"
                                image={RemoveButton}
                                class="action-button__remove"
                                alt="remove button"
                                onClick={() => deleteMemberHandler(member.id)}
                            />
                            <ActionButton
                                type="with-link"
                                image={EditButton}
                                class="action-button__edit"
                                alt="edit button"
                                pathFromProps={`${PATH}/edit/${member.id}`}
                            />
                            <ActionButton
                                type="without-link"
                                image={WatchlistButton}
                                class="action-button__watchlist"
                                activeClass={
                                    member.watchlist ? activeClass : ''
                                }
                                alt="watchlist button"
                                onClick={() => watchlistHandler(member)}
                            />
                            <ActionButton
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
                                    <ActionButton
                                        type="without-link"
                                        image={RemoveButton}
                                        class="action-button__remove"
                                        alt="remove button"
                                        onClick={() =>
                                            deleteMemberHandler(member.id)
                                        }
                                    />
                                    <ActionButton
                                        type="with-link"
                                        image={EditButton}
                                        class="action-button__edit"
                                        alt="edit button"
                                        pathFromProps={`${PATH}/edit/${member.id}`}
                                    />
                                    <ActionButton
                                        type="without-link"
                                        image={WatchlistButton}
                                        class="action-button__watchlist"
                                        activeClass={
                                            member.watchlist ? activeClass : ''
                                        }
                                        alt="watchlist button"
                                        onClick={() => watchlistHandler(member)}
                                    />
                                    <ActionButton
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
