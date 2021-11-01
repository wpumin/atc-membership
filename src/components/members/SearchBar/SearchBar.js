import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// svg img
import ViewButton from '../../../images/close.svg'
import LoadingIcon from '../../../images/loading_white.svg'

const SearchBar = (props) => {
    const initialState = ''
    const location = useLocation()
    const [search, setSearch] = useState(initialState)

    const clearSearch = () => {
        setSearch(initialState)
    }
    const closeClasses = search ? 'close-button' : 'close-button hide'

    const LoadingIconForSearch = () => {
        return (
            <img
                src={LoadingIcon}
                className="loading-icon"
                alt="loading icon"
            />
        )
    }

    useEffect(() => {
        setSearch(initialState)
    }, [location.pathname])

    return (
        <form
            className="form-inline mb-2"
            onSubmit={props.onSubmit}
            role="search"
        >
            <div className="smart-input">
                <input
                    type="text"
                    aria-label="search input"
                    className="form-control"
                    name="keyword"
                    value={search}
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img
                    src={ViewButton}
                    alt="close button"
                    className={closeClasses}
                    onClick={(e) => clearSearch()}
                />
            </div>
            <small>{props.searchValue}</small>
            <button className="btn btn-primary" aria-label="submit button">
                Search {props.loadingForSearch && <LoadingIconForSearch />}
            </button>
        </form>
    )
}

export default SearchBar
