import React, { useState } from 'react'
import {
    StyledHeader,
    StyledImage,
    StyledWrapper
} from './style'

import logo from '../../assets/starwarslogo.png'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Nav from '../Nav/Nav'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store/store'

export default function Header() {

    const { loggedIn } = useSelector((state: RootStore) => state.auth)

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(prevVal => !prevVal)
    }

    return (
        <StyledHeader>
            <StyledWrapper>
                <StyledImage to="/">
                    <img src={logo} alt="Star Wars" />
                </StyledImage>
                {
                    loggedIn ? (
                        <>
                            <HamburgerMenu toggle={toggle} isOpen={isOpen} />
                            <Nav toggle={toggle} isOpen={isOpen} />
                        </>
                    ) : null
                }
            </StyledWrapper>
        </StyledHeader>
    )
}
