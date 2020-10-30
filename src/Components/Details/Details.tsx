import React, { ReactNode, useCallback, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nameOf } from '../../helpers/nameOf';
import { ICharacter } from '../../store/characters/characters.types';
import { IPlanet } from '../../store/planets/planets.types';
import { IStarship } from '../../store/starships/starships.types';

import { ICharacterLabelsToDisplay } from '../../Views/CharacterDetails/labels';
import { IPlanetLabelsToDisplay } from '../../Views/PlanetDetails/labels';
import { IStarshipLabelsToDisplay } from '../../Views/StarshipsDetails/labels';

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

interface IDetailsProps {
    children: ReactNode
    loading: boolean
    labelsToDisplay: (IPlanetLabelsToDisplay | IStarshipLabelsToDisplay | ICharacterLabelsToDisplay)[]
    data: IPlanet | ICharacter | IStarship
    action: (postfix: string) => void
    error: string
    title: string
}
interface IParamTypes {
    name: string
}


export default function Details({ loading, labelsToDisplay, data, children, action, error, title }: IDetailsProps) {
    const dispatch = useDispatch()
    let { name: paramsName } = useParams<IParamTypes>();

    const getData = useCallback((name) => {
        const postfix = `?search=${name}`
        dispatch(action(postfix))
    }, [dispatch, action])

    useEffect(() => {
        getData(paramsName)
    }, [getData, paramsName])

    if (loading) return <LoadingSpinner />
    if (!data) return <Info text="No data found" />
    if (error) return <Info text={error} />

    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledInfoWrapper>
                <div>
                    {labelsToDisplay.map(({ key, label, suffix }) => (
                        <StyledLabelDataGroup key={key}>
                            <StyledLabel>{label}:</StyledLabel>
                            <StyledData>
                                {nameOf(data, key as keyof typeof data)}
                                <StyledSuffix> {suffix && nameOf(data, key as keyof typeof data) as string !== 'unknown' ? suffix : ''}</StyledSuffix>
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



