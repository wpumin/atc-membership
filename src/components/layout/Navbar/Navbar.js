import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledNavbar } from './Navbar.styled'
import { PATH, MENUS, FONT_SIZE } from '../../../const/Constant'
import Brand from './Brand'
import HamburgerIcon from './HamburgerIcon'
import Menu from './Menu'
import FontResizeingButton from './FontResizeingButton'
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

    const onChangeFontSize = (currentFontSize) => {
        document.body.style.fontSize = `${currentFontSize}px`
        localStorage.setItem('fontSize', currentFontSize)
        setFontSize(currentFontSize)
    }

    const fontSizeHandler = (size) => {
        switch (size) {
            case 'small':
                onChangeFontSize(14)
                break
            case 'medium':
                onChangeFontSize(16)
                break
            case 'large':
                onChangeFontSize(18)
                break
            default:
                onChangeFontSize(16)
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
                        <li className="font-resize" key={MENUS.length}>
                            <button className="d-block d-lg-none label">
                                Font size:
                            </button>
                            {FONT_SIZE.map((fontSizeItem, index) => (
                                <FontResizeingButton
                                    key={index}
                                    class={`${fontSizeItem.sizeLabel} ${
                                        fontSize === fontSizeItem.size &&
                                        'active'
                                    }`}
                                    onClick={() =>
                                        fontSizeHandler(fontSizeItem.sizeLabel)
                                    }
                                />
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
