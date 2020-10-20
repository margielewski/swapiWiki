import React from 'react'
import {
    StyledHeader,
    StyledImage,
} from './style'

import logo from '../../assets/starwarslogo.png'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

export default function Header() {
    return (
        <StyledHeader>
            <StyledImage>
                <img src={logo} alt="" />
            </StyledImage>
            <HamburgerMenu />
        </StyledHeader>
    )
}
