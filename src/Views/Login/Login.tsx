import React, { MouseEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';

import {
    StyledWrapper,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledButton,
    StyledInfo,
    StyledError
} from './style'

import { login } from '../../store/auth/auth.actions'

export default function Login() {
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const loginInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const handleLogin = (e: MouseEvent) => {
        e.preventDefault()
        if (!loginInput || !loginInput.current || !passwordInput || !passwordInput.current) return;
        if (
            loginInput.current.value &&
            passwordInput.current.value &&
            loginInput.current.value === 'test' &&
            passwordInput.current.value === 'test123'
        ) {
            setError(false)
            dispatch(login('MYSUPERTOKEN'))
        }
        setError(true)
    }

    return (
        <StyledWrapper>
            <StyledForm>

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput ref={loginInput} id="email" type="text" />

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput ref={passwordInput} id="password" type="password" />

                <StyledButton onClick={(e: MouseEvent) => handleLogin(e)}>Sign in</StyledButton>

                {error ? <StyledError>Invalid credentials</StyledError> : null}

                <StyledInfo>login: test</StyledInfo>
                <StyledInfo>password: test123</StyledInfo>
            </StyledForm>
        </StyledWrapper>
    )
}
