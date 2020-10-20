import React from 'react'

import { StyledWrapper, StyledForm, StyledLabel, StyledInput, StyledButton } from './style'

export default function Login() {
    return (
        <StyledWrapper>
            <StyledForm>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput id="email" type="text" />
                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput id="password" type="password" />
                <StyledButton>Sign in</StyledButton>
            </StyledForm>
        </StyledWrapper>
    )
}
