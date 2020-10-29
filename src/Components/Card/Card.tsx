import React from 'react'
import { StyledWrapper, StyledImg, StyledText, StyledLabel } from './style'

interface ICardProps {
    name: string
    icon: string
    routeTo: string
}

export default function Card({ name, icon, routeTo }: ICardProps) {
    return (
        <StyledWrapper to={`${routeTo}/${name}`}>
            <StyledImg>
                <img src={icon} alt="planet" />
            </StyledImg>
            <StyledLabel>name</StyledLabel>
            <StyledText>{name}</StyledText>
        </StyledWrapper>
    )
}
