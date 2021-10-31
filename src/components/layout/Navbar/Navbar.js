import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledNavbar } from './Navbar.styled'
import Brand from './Brand'
import HamburgerIcon from './HamburgerIcon'
import Menu from './Menu'
import { PATH, MENUS } from '../../../const/Constant'

const Navbar = () => {
    const location = useLocation()
    const brandName = 'ATC Mebmership'
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
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
