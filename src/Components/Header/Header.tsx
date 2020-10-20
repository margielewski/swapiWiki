import React from 'react'
import {
    StyledImage
} from './style'

import logo from '../../assets/starwarslogo.png'

export default function Header() {
    return (
        <header>
            <StyledImage>
                <img src={logo} alt="" />
            </StyledImage>
        </header>
    )
}
