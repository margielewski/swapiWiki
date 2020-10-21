import React from 'react'

import {
    StyledWrapper,
    StyledOption,
    StyledImage,
    StyledName
} from './style'

import starshipImg from '../../assets/starshipExample.png'
import characterImg from '../../assets/characterExample.png'
import planetImg from '../../assets/planetExample.png'

interface IMainOptions {
    label: string
    img: string
    alt: string
    to: string
}

const mainOptions: IMainOptions[] = [
    {
        label: 'Starships',
        img: starshipImg,
        alt: 'star wars starship',
        to: '/starships'
    },
    {
        label: 'Characters',
        img: characterImg,
        alt: 'star wars character',
        to: '/characters'
    },
    {
        label: 'Planets',
        img: planetImg,
        alt: 'star wars planet',
        to: '/planets'
    },
]

export default function Main() {
    return (
        <StyledWrapper>
            {
                mainOptions.map(({ label, img, to, alt }) => (
                    <StyledOption to={to} key={label}>
                        <StyledImage>
                            <img src={img} alt={alt} />
                        </StyledImage>
                        <StyledName>{label}</StyledName>
                    </StyledOption>
                ))
            }
        </StyledWrapper>
    )
}
