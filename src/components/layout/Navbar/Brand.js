import React from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../../const/Constant'
import { StyledBrand } from './Brand.styled'

const Brand = (props) => {
    return (
        <StyledBrand>
            <Link className="navbar-brand" to={`${PATH}`} tabIndex={-1}>
                {props.brandName}
            </Link>
        </StyledBrand>
    )
}

export default Brand
