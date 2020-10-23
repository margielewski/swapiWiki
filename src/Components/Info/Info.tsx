import React from 'react'

import { StyledWrapper } from './style'

interface IInfoProps {
    text: string
}

export default function Info({ text }: IInfoProps) {
    return (
        <StyledWrapper>
            {text}
        </StyledWrapper>
    )
}
