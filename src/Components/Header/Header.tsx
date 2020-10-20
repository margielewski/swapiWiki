import React, { useState } from 'react'
import {
    StyledHeader,
    StyledImage,
} from './style'

import logo from '../../assets/starwarslogo.png'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Nav from '../Nav/Nav'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(prevVal => !prevVal)
    }

    return (
        <StyledHeader>
            <StyledImage>
                <img src={logo} alt="Star Wars" />
            </StyledImage>
            <HamburgerMenu toggle={toggle} isOpen={isOpen} />
            <Nav toggle={toggle} isOpen={isOpen} />
        </StyledHeader>
    )
}
