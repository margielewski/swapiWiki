import React from 'react'

import {
    StyledWrapper,
    StyledImage
} from './style'

import starshipImg from '../../assets/starshipExample.png'
import characterImg from '../../assets/characterExample.png'
import planetImg from '../../assets/planetExample.png'

export default function Main() {
    return (
        <StyledWrapper>
            <StyledImage>
                <img src={starshipImg} alt="" />
            </StyledImage>
            <StyledImage>
                <img src={characterImg} alt="" />
            </StyledImage>
            <StyledImage>
                <img src={planetImg} alt="" />
            </StyledImage>
        </StyledWrapper>
    )
}
