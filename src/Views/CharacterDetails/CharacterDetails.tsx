import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

import { getCharacterDetails } from '../../store/characters/characterDetails/characterDetails.actions';

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

export default function CharacterDetails() {
    const dispatch = useDispatch()

    const { data, loading, error, films, species, vehicles, starships } = useSelector((state: RootStore) => state.characterDetails)

    let { name: paramsName } = useParams<IParamTypes>();

    useEffect(() => {
        getCharactersData(paramsName)
    }, [paramsName])

    const getCharactersData = (name: string) => {
        const postfix = `?search=${name}`
        dispatch(getCharacterDetails(postfix))
    }
    //TODO
    if (loading) return <LoadingSpinner />
    if (!data) return <Info text="No data found" />

    return (
        <StyledWrapper>
            <StyledTitle>Character Details</StyledTitle>
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
                    <DetailsList title="Species" itemsKey="name" items={species} />
                    <DetailsList title="Vehicles" itemsKey="name" items={vehicles} />
                    <DetailsList title="Starships" itemsKey="name" items={starships} />
                </div>
            </StyledInfoWrapper>
        </StyledWrapper>
    )
}
