import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledNavbar } from './Navbar.styled'
import Brand from './Brand'
import HamburgerIcon from './HamburgerIcon'
import Menu from './Menu'
import { PATH, MENUS } from '../../../const/Constant'
import FontSizeContext from '../../../context/fontSizeContext'

const Navbar = () => {
    const location = useLocation()
    const brandName = 'ATC Membership'
    const homePath = location.pathname === `${PATH}`
    const addMemberPath = location.pathname === `${PATH}/add`
    const watchlistPath = location.pathname === `${PATH}/watchlist`

    const normalNav = 'nav-item'
    const navActive = 'nav-item active'
    const homeClasses = homePath ? navActive : normalNav
    const addMemberClasses = addMemberPath ? navActive : normalNav
    const watchlistClasses = watchlistPath ? navActive : normalNav

    const [hamburgerToggle, setHamburgerToggle] = useState(false)
    const [onShowNavbarCollapse, setOnShowNavbarCollapse] = useState(true)

    const onToggleHandler = () => {
        setTimeout(() => {
            setOnShowNavbarCollapse(true)
        }, 500)
        setHamburgerToggle((prevHamburgerToggle) => !prevHamburgerToggle)
    }

    const onClickMenu = () => {
        setOnShowNavbarCollapse(false)
        onToggleHandler()
    }

    const hamburgerClass = hamburgerToggle ? 'open' : ''
    const navbarCollapseClass = !onShowNavbarCollapse
        ? 'collapse navbar-collapse hide'
        : 'collapse navbar-collapse'

    const { fontSize, setFontSize } = useContext(FontSizeContext)

    const fontSizeHandler = (size) => {
        switch (size) {
            case 'small':
                document.body.style.fontSize = `14px`
                localStorage.setItem('fontSize', 14)
                setFontSize(14)
                break
            case 'medium':
                document.body.style.fontSize = `16px`
                localStorage.setItem('fontSize', 16)
                setFontSize(16)
                break
            case 'large':
                document.body.style.fontSize = `18px`
                localStorage.setItem('fontSize', 18)
                setFontSize(18)
                break
            default:
                document.body.style.fontSize = `16px`
                localStorage.setItem('fontSize', 16)
                setFontSize(16)
                break
        }
    }

    useEffect(() => {
        if (fontSize === '14') {
            fontSizeHandler('small')
        }
        if (fontSize === '16') {
            fontSizeHandler('medium')
        }
        if (fontSize === '18') {
            fontSizeHandler('large')
        }
    }, [fontSize])

    return (
        <StyledNavbar
            className="navbar navbar-expand-lg navbar-light bg-transparent"
            role="navigation"
        >
            <div className="container">
                <div className="navbar-header">
                    <Brand brandName={brandName} />
                    <HamburgerIcon
                        hamburgerClass={hamburgerClass}
                        onToggleHandler={onToggleHandler}
                    />
                </div>
                <div className={navbarCollapseClass} id="navbarNav">
                    <ul className="navbar-nav">
                        {MENUS.map((menu, index) => (
                            <Menu
                                key={index}
                                activeOrNotActive={
                                    menu.path === '#'
                                        ? homeClasses
                                        : menu.path === '/add'
                                        ? addMemberClasses
                                        : watchlistClasses
                                }
                                onClick={onClickMenu}
                                path={`${PATH}${menu.path}`}
                                menu={menu.page}
                            />
                        ))}
                        <li className="font-resize">
                            <span className="d-block d-lg-none label">
                                Font size:
                            </span>
                            <span
                                className={`small ${
                                    fontSize === 14 && 'active'
                                }`}
                                onClick={() => fontSizeHandler('small')}
                            >
                                A
                            </span>{' '}
                            <span
                                className={`medium ${
                                    fontSize === 16 && 'active'
                                }`}
                                onClick={() => fontSizeHandler('medium')}
                            >
                                A
                            </span>{' '}
                            <span
                                className={`large ${
                                    fontSize === 18 && 'active'
                                }`}
                                onClick={() => fontSizeHandler('large')}
                            >
                                A
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
