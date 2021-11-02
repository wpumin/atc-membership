import React from 'react'
import { StyledNotFound } from './NotFound.styled'
import { PATH, MENUS } from '../../../const/Constant'
import { Link } from 'react-router-dom'
import NotFoundImage from '../../../images/404.png'
import ArrowImage from '../../../images/arrow.svg'

const pageContent =
    'We are sorry but the page you are looking for does not exist. Please select a page from the site navigation or follow one of the links below.'

const NotFound = () => {
    return (
        <StyledNotFound>
            <div className="not-found">
                <img
                    src={NotFoundImage}
                    alt="404 —  page not found"
                    aria-label="404 —  page not found"
                    className="not-found__image"
                />
                <div className="not-found__content">
                    <Link to="/" tabIndex={1} aria-label="back button">
                        <div className="not-found__back">
                            <img
                                src={ArrowImage}
                                alt="go back button"
                                className="not-found__arrow"
                            />
                            <span>Back to Homepage</span>
                        </div>
                    </Link>
                    <p>{pageContent}</p>
                    <div className="not-found__link">
                        {MENUS.map((menu, index) => (
                            <Link
                                tabIndex={index + 1}
                                key={index}
                                aria-label={`${menu.page} button`}
                                to={`${PATH}${menu.path}`}
                            >
                                {menu.page}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </StyledNotFound>
    )
}

export default NotFound
