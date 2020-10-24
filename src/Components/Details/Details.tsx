import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Info from '../Info/Info';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import {
    StyledWrapper,
    StyledLabelDataGroup,
    StyledSuffix,
    StyledLabel,
    StyledTitle,
    StyledData,
    StyledInfoWrapper,
} from './style'

interface IParamTypes {
    name: string
}

export default function Details({ loading, labelsToDisplay, data, children, action, error, title }: any) {
    const dispatch = useDispatch()
    let { name: paramsName } = useParams<IParamTypes>();

    useEffect(() => {
        getData(paramsName)
    }, [paramsName])

    const getData = (name: string) => {
        const postfix = `?search=${name}`
        dispatch(action(postfix))
    }

    if (loading) return <LoadingSpinner />
    if (!data) return <Info text="No data found" />
    if (error) return <Info text={error} />

    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledInfoWrapper>
                <div>
                    {labelsToDisplay.map(({ key, label, suffix }: any) => (
                        <StyledLabelDataGroup key={key}>
                            <StyledLabel>{label}:</StyledLabel>
                            <StyledData>
                                {data[key]}
                                <StyledSuffix> {suffix && data[key] !== 'unknown' ? suffix : ''}</StyledSuffix>
                            </StyledData>
                        </StyledLabelDataGroup>
                    ))}
                </div>
                <div>
                    {children}
                </div>
            </StyledInfoWrapper>
        </StyledWrapper>
    )
}



