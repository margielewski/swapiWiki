import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

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
import { RootStore } from '../../store/store';
import { ICredentials } from '../../store/auth/auth.types';

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
});

export default function Login() {
    const dispatch = useDispatch()

    const { error } = useSelector((state: RootStore) => state.auth)

    const { register, handleSubmit, errors } = useForm<ICredentials>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: ICredentials) => {
        dispatch(login(data))
    }

    return (
        <StyledWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput name="email" ref={register} id="email" type="text" />

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput name="password" ref={register} id="password" type="password" />

                <StyledButton type="submit">Sign in</StyledButton>

                <StyledError>
                    <p>{errors.email?.message}</p>
                    <p>{errors.password?.message}</p>
                    <p>{error}</p>
                </StyledError>

                <StyledInfo>login: test@test.pl</StyledInfo>
                <StyledInfo>password: test123</StyledInfo>
            </StyledForm>
        </StyledWrapper>
    )
}
