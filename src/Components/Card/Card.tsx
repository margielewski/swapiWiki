import React from 'react'
import { StyledWrapper, StyledImg, StyledText, StyledLabel } from './style'

export default function Card({ name, icon, routeTo }: any) {
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
