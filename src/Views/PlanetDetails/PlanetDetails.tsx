import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

import { getPlanetDetails } from '../../store/planets/planetDetails/planetDetails.actions';

import { RootStore } from '../../store/store';

import {
    StyledWrapper,
    StyledLabelDataGroup,
    StyledSuffix,
    StyledLabel,
    StyledTitle,
    StyledData,
    StyledInfoWrapper,
} from './style'

import { labelsToDisplay } from './labels'
import Info from '../../Components/Info/Info';
import DetailsList from '../../Components/DetailsList/DetailsList';

interface IParamTypes {
    name: string
}

export default function PlanetDetails() {
    const dispatch = useDispatch()

    const { data, loading, error, films, residents } = useSelector((state: RootStore) => state.planetDetails)

    let { name: ParamsName } = useParams<IParamTypes>();

    useEffect(() => {
        getPlanetsData(ParamsName)
    }, [ParamsName])

    const getPlanetsData = (name: string) => {
        const postfix = `?search=${name}`
        dispatch(getPlanetDetails(postfix))
    }
    //TODO
    if (loading) return <LoadingSpinner />
    if (!data) return <Info text="No data found" />

    return (
        <StyledWrapper>
            <StyledTitle>Planet Details</StyledTitle>
            <StyledInfoWrapper>
                <div>
                    {labelsToDisplay.map(({ key, label, suffix }) => (
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
                    <DetailsList title="Films" itemsKey="title" items={films} />
                    <DetailsList title="Residents" itemsKey="name" items={residents} />
                </div>
            </StyledInfoWrapper>
        </StyledWrapper>
    )
}
