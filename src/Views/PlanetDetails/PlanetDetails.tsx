import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

import { getPlanetDetails } from '../../store/planets/planetDetails/planetDetails.actions';

import { RootStore } from '../../store/store';

import { StyledWrapper, StyledLabelDataGroup, StyledSuffix, StyledLabel, StyledTitle, StyledData } from './style'

import { labelsToDisplay } from './labels'

interface IParamTypes {
    name: string
}

export default function PlanetDetails() {
    const dispatch = useDispatch()

    const { data, loading, error } = useSelector((state: RootStore) => state.planetDetails)

    let { name: ParamsName } = useParams<IParamTypes>();

    useEffect(() => {
        getPlanetsData(ParamsName)
    }, [ParamsName])

    const getPlanetsData = (name: string) => {
        const postfix = `?search=${name}`
        dispatch(getPlanetDetails(postfix))
    }
    //TODO
    if (loading || !data) return <LoadingSpinner />

    return (
        <StyledWrapper>
            <StyledTitle>Planet Details</StyledTitle>
            {labelsToDisplay.map(({ key, label, suffix }) => (
                <StyledLabelDataGroup key={key}>
                    <StyledLabel>{label}:</StyledLabel>
                    <StyledData>
                        {data[key]}
                        <StyledSuffix> {suffix ? suffix : ''}</StyledSuffix>
                    </StyledData>
                </StyledLabelDataGroup>
            ))}
        </StyledWrapper>
    )
}
