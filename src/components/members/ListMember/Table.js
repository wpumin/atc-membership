import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'
import { StyledTable } from './Table.styled'
import { PATH } from '../../../const/Constant'
import SearchBar from '../SearchBar'
import TableHeader from './TableHeader'
import MemberList from './MemberList'
import Loading from '../../UI/Loading'
import Swal from 'sweetalert2'

const Table = () => {
    const { REACT_APP_JSON_SERVER } = process.env
    let match = useRouteMatch()
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingForSearch, setLoadingForSearch] = useState(false)

    useEffect(() => {
        loadMembers()
        setLoading(true)
    }, [match.path])

    const loadMembers = async () => {
        await axios
            .get(REACT_APP_JSON_SERVER + '/members')
            .then((res) => {
                setMembers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                const timeout = setTimeout(() => {
                    setLoading(false)
                }, 250)
                return () => clearTimeout(timeout)
            })
    }

    const searchHandler = async (e) => {
        setLoadingForSearch(true)
        e.preventDefault()
        const query = e.target.elements.keyword.value
            .toString()
            .trim()
            .replace(/[^A-Z0-9\s-.]+/gi, '')
        await axios
            .get(`${REACT_APP_JSON_SERVER}/members?q=${query ? query : ' '}`)
            .then((res) => {
                setMembers(res.data)
                if (match.path === `${PATH}`) {
                    if (res.data.length === 0) {
                        loadMembers()
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            text: 'Not found your member',
                            showConfirmButton: false,
                            timer: 2000,
                        })
                        console.log('not found!')
                    } else {
                        console.log('search completed!')
                    }
                }
                if (match.path === `${PATH}/watchlist`) {
                    let temp = res.data.filter((member) => {
                        return member.watchlist === true
                    })
                    if (temp.length === 0) {
                        loadMembers()
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            text: 'Not found your member',
                            showConfirmButton: false,
                            timer: 2000,
                        })
                        console.log('not found!')
                    } else {
                        console.log('search completed!')
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoadingForSearch(false)
            })
    }

    return (
        <StyledTable>
            <SearchBar
                onSubmit={searchHandler}
                loadingForSearch={loadingForSearch}
            />
            {loading ? (
                <Loading />
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-sm">
                        <TableHeader />
                        <MemberList
                            data={members}
                            loadMembers={loadMembers}
                            pathFromProps={match.path}
                        />
                    </table>
                </div>
            )}
        </StyledTable>
    )
}

export default Table
