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

const mainOptions = [
    {
        label: 'Starships',
        img: starshipImg,
        alt: 'star wars starship',
    },
    {
        label: 'Characters',
        img: characterImg,
        alt: 'star wars character',
    },
    {
        label: 'Planets',
        img: planetImg,
        alt: 'star wars planet',
    },
]

export default function Main() {
    return (
        <StyledWrapper>
            {
                mainOptions.map(({ label, img, alt }) => (
                    <StyledOption key={label}>
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
